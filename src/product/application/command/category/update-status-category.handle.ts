import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { CategoryRepository } from "src/product/domain/category/category.repository"
import { UpdateStatusCategoryCommand } from "./update-status-category.command"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";

@CommandHandler(UpdateStatusCategoryCommand)
export class UpdateStatusCategoryHandler implements ICommandHandler<UpdateStatusCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: UpdateStatusCategoryCommand): Promise<void> {
        const { id, status, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(command.restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryRepository.findById(id, restaurantId)

        if (!category) {
            throw new NotFoundException()
        }

        await this.categoryRepository.updateStatus(id, status, restaurantId)
    }
}