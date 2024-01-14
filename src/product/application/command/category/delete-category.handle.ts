import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { CategoryRepository } from "src/product/domain/category.repository"
import { DeleteCategoryCommand } from "./delete-category.command"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";

@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryHandler implements ICommandHandler<DeleteCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute(command: DeleteCategoryCommand): Promise<void> {
        const { id, restaurantId } = command
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryRepository.findById(id, restaurantId)

        if (!category) throw new NotFoundException()

        await this.categoryRepository.delete(id, restaurantId)
    }
}