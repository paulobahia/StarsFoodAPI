import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { UpdateCategoryCommand } from "./update-category.command"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { CategoryRepository } from "src/product/domain/category/category.repository"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryHandler implements ICommandHandler<UpdateCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: UpdateCategoryCommand): Promise<void> {
        const { id, name, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(command.restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryRepository.findById(id, restaurantId)

        if (!category) throw new NotFoundException()

        category.updateName(name)

        await this.categoryRepository.update(id, category, restaurantId)
    }
}