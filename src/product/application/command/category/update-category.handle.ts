import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { UpdateCategoryCommand } from "./update-category.command"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { CategoryRepository } from "src/product/domain/category.repository"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryHandler implements ICommandHandler<UpdateCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute(command: UpdateCategoryCommand): Promise<void> {
        const { id, name, restaurantId } = command
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryRepository.findById(id, restaurantId)

        if (!category) throw new NotFoundException()

        category.updateName(name)

        await this.categoryRepository.update(id, category, restaurantId)
    }
}