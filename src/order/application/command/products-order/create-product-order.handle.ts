import { CommandBus, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProductOrderCommand } from "./create-order.command";
import { InjectionToken as InjectionProductsToken } from "src/product/application/injection-token";
import { Inject, BadRequestException, NotFoundException } from "@nestjs/common";
import { ProductRepository } from "src/product/domain/product/product.repository";
import { InjectionToken } from "../../injection-token";
import { ProductOrderRepository } from "src/order/domain/product-order/product-order.repository";
import { ProductOrderFactory } from "src/order/domain/product-order/product-order.factory";
import { OrderRepository } from "src/order/domain/order/order.repository";
import { PrismaProductOrder } from "src/shared/types/prismaTypes";

@CommandHandler(CreateProductOrderCommand)
export class CreateProductOrderHandler implements ICommandHandler<CreateProductOrderCommand, PrismaProductOrder> {
    constructor(readonly commandBus: CommandBus) { }
    @Inject(InjectionProductsToken.PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository;
    @Inject(InjectionToken.PRODUCT_ORDER_REPOSITORY)
    private readonly productOrder: ProductOrderRepository;
    @Inject(InjectionToken.ORDER_REPOSITORY)
    private readonly orderRepository: OrderRepository
    @Inject() private readonly productOrderFactory: ProductOrderFactory

    async execute(command: CreateProductOrderCommand): Promise<PrismaProductOrder> {
        const { orderId, restaurantId, variations } = command

        const variationsId = variations.map(item => item.variationId)

        const checkActiveProducts = await this.productRepository.findByVariationsIds(variationsId, restaurantId)

        if (!checkActiveProducts) {
            throw new NotFoundException
        }

        if (checkActiveProducts.length != variations.length) {
            throw new BadRequestException()
        }

        const productOrder = variations.map((variation) => {
            return this.productOrderFactory.create({
                quantity: variation.quantity,
                variationId: variation.variationId,
                orderId,
            })
        })

        await this.productOrder.create(productOrder)

        const order = await this.orderRepository.findByOrderId(orderId, restaurantId)

        if (!order) {
            throw new BadRequestException()
        }

        return order
    }
}