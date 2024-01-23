import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateCategoryCommand } from "./create-category.command";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { CategoryRepository } from "src/product/domain/category/category.repository";
import { CategoryFactory } from "src/product/domain/category/category.factory";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler implements ICommandHandler<CreateCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject() private readonly categoryFactory: CategoryFactory
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: CreateCategoryCommand): Promise<void> {
        const restaurant = await this.restauranRepository.findById(command.restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = this.categoryFactory.create(command)
        await this.categoryRepository.create(category)
    }
}