import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateStatusOrderCommand } from "./update-status-order.command";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { OrderRepository } from "src/order/domain/order/order.repository";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";

@CommandHandler(UpdateStatusOrderCommand)
export class UpdateStatusOrderHandler implements ICommandHandler<UpdateStatusOrderCommand, void> {

    @Inject(InjectionToken.ORDER_REPOSITORY)
    private readonly orderRepository: OrderRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: UpdateStatusOrderCommand): Promise<void> {
        const { id, restaurantId, status } = command
        const restaurant = await this.restauranRepository.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const order = await this.orderRepository.findById(id, restaurantId)

        if (!order) {
            throw new NotFoundException()
        }

        await this.orderRepository.updateStatus(id, status, restaurantId)
    }
}