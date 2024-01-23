import { CommandBus, CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProductCommand } from "./create-product.command";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { ProductFactory } from "src/product/domain/product/product.factory";
import { ProductRepository } from "src/product/domain/product/product.repository"
import { CategoryRepository } from "src/product/domain/category/category.repository";
import { CreateVariationCommand } from "../variation/create-variation.command";

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand, void> {
    constructor(readonly commandBus: CommandBus) { }

    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository
    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject(InjectionToken.PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository
    @Inject() private readonly productFactory: ProductFactory

    async execute(command: CreateProductCommand): Promise<void> {
        const { restaurantId, categoryId } = command
        const restaurant = await this.restauranRepository.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryRepository.findById(categoryId, restaurantId)

        if (!category) {
            throw new NotFoundException()
        }

        const productFactory = this.productFactory.create(command)
        const product = await this.productRepository.create(productFactory)

        const productId = product.Id

        const commandVariation = new CreateVariationCommand(command.variations.map((variation) => ({
            name: variation.name,
            value: variation.value,
            productId,
            restaurantId
        })))

        await this.commandBus.execute(commandVariation)
    }
}