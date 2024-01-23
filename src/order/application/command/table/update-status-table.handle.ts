import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { UpdateStatusTableCommand } from "./update-status-table.command"
import { TableRepository } from "src/order/domain/table/table.repository"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";

@CommandHandler(UpdateStatusTableCommand)
export class UpdateStatusTableHandler implements ICommandHandler<UpdateStatusTableCommand, void> {

    @Inject(InjectionToken.TABLE_REPOSITORY)
    private readonly tableRepository: TableRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: UpdateStatusTableCommand): Promise<void> {
        const { id, status, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const table = await this.tableRepository.findById(id, restaurantId)

        if (!table) throw new NotFoundException()

        await this.tableRepository.updateStatus(id, status, restaurantId)
    }
}