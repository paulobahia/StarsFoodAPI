import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from '../repository/orders.repository';
import { MessagesHelper } from '../helpers/messages.helper';
import { MessagesHelper as MessagesHelperTable } from '../../tables/helpers/messages.helper';
import { CreateOrderDto } from '../dto/create-order.dto';
import { HandleStatusOrderDto } from '../dto/handle-status-order.dto';
import { TablesProductsRepository } from 'src/modules/tables/repository/tables.repository';
import { SocketGateway } from 'src/gateway/socket-gateway';
import { OrderDto } from '../dto/order.dto';
import { UsersRepository } from 'src/modules/users/repository/users.repository';
import { ProductsOrdersRepository } from 'src/modules/products-orders/repository/orders-products.repository';
import { ProductImagesRepository } from 'src/modules/product-images/repository/product-images.repository';
import { ProductsRepository } from 'src/modules/products/repository/products.repository';

@Injectable()
export class OrdersService {
    constructor
        (
            private readonly ordersRepository: OrdersRepository,
            private readonly productsOrdersRepository: ProductsOrdersRepository,
            private readonly tablesRepository: TablesProductsRepository,
            private readonly productRepository: ProductsRepository,
            private readonly usersRepository: UsersRepository,
            private readonly socketGateway: SocketGateway,
            private readonly productImages: ProductImagesRepository
        ) { }

    async findAll(RestaurantId: string): Promise<OrderDto[] | null> {

        const AllOrders = await this.ordersRepository.findAll(RestaurantId)

        if (!AllOrders) {
            throw new NotFoundException(MessagesHelper.ORDERS_NOT_FOUND)
        }

        const Orders: OrderDto[] = [];

        const Users = await this.usersRepository.findAll(RestaurantId)

        if (!Users) {
            throw new NotFoundException("Usuário não encontrado")
        }

        for (const item of AllOrders) {
            const Order = new OrderDto()

            const User = Users.find((user) => user.Id === item.UserId)

            if (!User) {
                throw new NotFoundException("Usuário não encontrado")
            }

            const findImage = async (ProductId: number) => {
                const Images = await this.productImages.findByProductId(RestaurantId, ProductId)
                return Images.map(image => image.ImagePath)[0];
            }

            Order.Id = item.Id
            Order.table = item.TableId
            Order.status = item.Status
            Order.createTime = item.CreatedTime as Date
            Order.userId = User.Id
            Order.userName = User.Name
            Order.userImg = ""
            Order.orderProducts = await Promise.all(item.OrderProducts.map(async (product) => ({
                productId: product.Variation.ProductId,
                productName: product.Variation.Products.Name,
                productImg: await findImage(product.Variation.ProductId),
                quantity: product.Quantity,
                value: product.Variation.Value,
            })));

            Orders.push(Order)
        }

        return Orders
    }

    async create(RestaurantId: string, InstanceId: string, newOrder: CreateOrderDto) {

        const User = await this.usersRepository.findUnique(RestaurantId, parseInt(InstanceId, 10))

        if (!User) {
            throw new NotFoundException("Usuário não encontrado")
        }

        const Table = await this.tablesRepository.findUnique(RestaurantId, newOrder.table)

        if (!Table) {
            throw new BadRequestException(MessagesHelperTable.TABLE_NOT_FOUND)
        }

        const Order = await this.ordersRepository.create(RestaurantId, InstanceId, newOrder)

        if (!Order) {
            throw new BadRequestException(MessagesHelper.ERRO_CREATE_ORDER)
        }

        const VariationIds = newOrder.variations.map(variation => variation.variationId);

        const ValidProducts = await this.productRepository.findValidsProductsByVariationIds(RestaurantId, VariationIds)

        if (ValidProducts.length != newOrder.variations.length) {
            throw new BadRequestException(MessagesHelper.ERRO_PRODUCT_INACTIVE);
        }

        const OrderId = Order.Id

        await this.productsOrdersRepository.create(OrderId, newOrder.variations)

        const ProductsOrders = await this.ordersRepository.findOrdersProductsByOrderId(RestaurantId, Order.Id)

        if (!ProductsOrders) {
            throw new BadRequestException(MessagesHelper)
        }

        const findImage = async (ProductId: number) => {
            const Images = await this.productImages.findByProductId(RestaurantId, ProductId)
            return Images.map(image => image.ImagePath)[0];
        }

        const orderUpdate = new OrderDto()
        orderUpdate.Id = OrderId;
        orderUpdate.table = Table.Number;
        orderUpdate.status = Order.Status;
        orderUpdate.createTime = Order.CreatedTime
        orderUpdate.userId = User.Id
        orderUpdate.userName = User.Name
        orderUpdate.userImg = ""
        orderUpdate.orderProducts = await Promise.all(ProductsOrders.map(async (product) => ({
            productId: product.Variation.ProductId,
            productName: product.Variation.Products.Name,
            productImg: await findImage(product.Variation.ProductId),
            quantity: product.Quantity,
            value: product.Variation.Value,
        })));

        await this.tablesRepository.handleStatus(RestaurantId, Table.Id)

        return this.socketGateway.sendOrderUpdate(orderUpdate)
    }

    async handleStatus(RestaurantId: string, OrdersId: string, data: HandleStatusOrderDto) {

        const Order = await this.ordersRepository.findUnique(RestaurantId, OrdersId)

        if (!Order) {
            throw new NotFoundException(MessagesHelper.ORDERS_NOT_FOUND)
        }

        await this.ordersRepository.handleStatus(RestaurantId, OrdersId, data)
    }
}
