import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { CategoryRepository } from "src/product/domain/category/category.repository"
import { DeleteCategoryCommand } from "./delete-category.command"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";

@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryHandler implements ICommandHandler<DeleteCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: DeleteCategoryCommand): Promise<void> {
        const { id, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(command.restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryRepository.findById(id, restaurantId)

        if (!category) throw new NotFoundException()

        await this.categoryRepository.delete(id, restaurantId)
    }
}