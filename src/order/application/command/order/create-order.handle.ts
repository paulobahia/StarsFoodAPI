import { CommandBus, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateOrderCommand } from "./create-order.command";
import { InjectionToken } from "../../injection-token";
import { Inject, NotFoundException } from "@nestjs/common";
import { OrderRepository } from "src/order/domain/order/order.repository";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { TableRepository } from "src/order/domain/table/table.repository";
import { InjectionToken as InjectionUserToken } from "src/user/application/injection-token";
import { UserRepository } from "src/user/domain/user.repository";
import { CreateOrderWebsocketOptions, OrderFactory } from "src/order/domain/order/order.factory";
import { CreateProductOrderCommand } from "../products-order/create-order.command";
import { PrismaProductOrder } from "src/shared/types/prismaTypes";
import { SocketGateway } from "src/shared/websocket/socket-gateway";


@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand, void> {
    constructor(readonly commandBus: CommandBus) { }

    @Inject(InjectionToken.ORDER_REPOSITORY)
    private readonly orderRepository: OrderRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository
    @Inject(InjectionToken.TABLE_REPOSITORY)
    private readonly tableRepository: TableRepository
    @Inject(InjectionUserToken.USER_REPOSITORY)
    private readonly userRepository: UserRepository
    @Inject() private readonly orderFactory: OrderFactory
    @Inject() private readonly socketGateway: SocketGateway

    async execute(command: CreateOrderCommand): Promise<void> {
        const { restaurantId, userId, tableId, variations } = command
        const restaurant = await this.restauranRepository.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const table = await this.tableRepository.findById(tableId, restaurantId)

        if (!table) {
            throw new NotFoundException()
        }

        const user = await this.userRepository.findById(userId, restaurantId)

        if (!user) {
            throw new NotFoundException()
        }

        const orderFactory = this.orderFactory.create(command)
        const order = await this.orderRepository.create(orderFactory)

        const orderId = order.Id
        const commandProductsOrders = new CreateProductOrderCommand(variations, orderId, restaurantId)

        const productOrder: PrismaProductOrder = await this.commandBus.execute(commandProductsOrders)

        await this.tableRepository.updateStatus(tableId, true, restaurantId)

        this.socketGateway.sendOrderUpdate(order, user, table, productOrder)
    }
}