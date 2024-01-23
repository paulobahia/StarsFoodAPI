import { CommandBus, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UpdateProductCommand } from "./update-product.command";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { InjectionToken } from "../../injection-token";
import { CategoryRepository } from "src/product/domain/category/category.repository";
import { ProductRepository } from "src/product/domain/product/product.repository";
import { UpdateVariationCommand } from "../variation/update-variation.command";

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler implements ICommandHandler<UpdateProductCommand, void> {
    constructor(readonly commandBus: CommandBus) { }

    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository
    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject(InjectionToken.PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository

    async execute(command: UpdateProductCommand): Promise<void> {
        const { id, categoryId, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(command.restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryRepository.findById(categoryId, restaurantId)

        if (!category) {
            throw new NotFoundException()
        }

        const commandVariation = new UpdateVariationCommand(command.variations.map((variation) =>
        ({
            id: variation.id ? variation.id : 0,
            name: variation.name,
            value: variation.value,
            productId: id,
            restaurantId
        })
        ), id, restaurantId)

        await this.commandBus.execute(commandVariation)

        await this.productRepository.update(id, command, restaurantId)
    }
}