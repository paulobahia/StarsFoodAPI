import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { UpdateStatusproductCommand } from "./update-status-product.command"
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { ProductRepository } from "src/product/domain/product/product.repository"

@CommandHandler(UpdateStatusproductCommand)
export class UpdateStatusProductHandler implements ICommandHandler<UpdateStatusproductCommand, void> {

    @Inject(InjectionToken.PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: UpdateStatusproductCommand): Promise<void> {
        const { id, status, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(command.restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const product = await this.productRepository.findById(id, restaurantId)

        if (!product) {
            throw new NotFoundException()
        }

        await this.productRepository.updateStatus(id, status, restaurantId)
    }
}