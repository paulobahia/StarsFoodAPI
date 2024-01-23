import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { DeleteProductCommand } from "./delete-product.command";
import { ProductRepository } from "src/product/domain/product/product.repository";

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler implements ICommandHandler<DeleteProductCommand, void> {

    @Inject(InjectionToken.PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: DeleteProductCommand): Promise<void> {
        const { id, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(command.restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const product = await this.productRepository.findById(id, restaurantId)

        if (!product) {
            throw new NotFoundException()
        }

        await this.productRepository.delete(id, restaurantId)
    }
}