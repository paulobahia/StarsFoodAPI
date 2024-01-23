import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { InjectionToken } from "../../injection-token";
import { TableRepository } from "src/order/domain/table/table.repository";
import { DeleteTableCommand } from "./delete-table.command";

@CommandHandler(DeleteTableCommand)
export class DeleteTableHandler implements ICommandHandler<DeleteTableCommand, void> {

    @Inject(InjectionToken.TABLE_REPOSITORY)
    private readonly tableRepository: TableRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: DeleteTableCommand): Promise<void> {
        const { id, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const table = await this.tableRepository.findById(id, restaurantId)

        if (!table) {
            throw new NotFoundException()
        }

        await this.tableRepository.delete(id, restaurantId)
    }
}