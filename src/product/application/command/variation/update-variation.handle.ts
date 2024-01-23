import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { VariationRepository } from "src/product/domain/variation/variation.repository";
import { UpdateVariationCommand } from "./update-variation.command";
import { ProductRepository } from "src/product/domain/product/product.repository";
import e from "express";
import { VariationFactory } from "src/product/domain/variation/variation.factory";

@CommandHandler(UpdateVariationCommand)
export class UpdateVariationHandler implements ICommandHandler<UpdateVariationCommand, void> {

    @Inject(InjectionToken.VARIATION_REPOSITORY)
    private readonly variationRepository: VariationRepository
    @Inject() private readonly variationFactory: VariationFactory

    async execute(command: UpdateVariationCommand): Promise<void> {
        const { productId, restaurantId, variations } = command
        const existingVariations = await this.variationRepository.findByProductId(productId, restaurantId)

        if (!existingVariations) {
            throw new NotFoundException()
        }

        const variationsToRemove = existingVariations.filter((variation) => {
            return variations.every((newVariation) => {
                return newVariation.id !== variation.Id
            })
        })

        if (variationsToRemove.length > 0) {

            const variationsFactory = variationsToRemove.map((variation) => this.variationFactory.create({
                id: variation.Id,
                name: variation.Name,
                value: variation.Value,
                restaurantId: variation.RestaurantId,
                productId: variation.ProductId
            }))

            await this.variationRepository.delete(variationsFactory)
        }

        await Promise.all(
            variations.map(async (newVariation) => {

                const existingVariation = existingVariations.find(variation => {
                    return variation.Id === newVariation.id
                })

                if (existingVariation) {
                    const variationId = existingVariation.Id

                    await this.variationRepository.update(variationId, newVariation, restaurantId)
                }
                else {
                    const variation = this.variationFactory.create({
                        name: newVariation.name,
                        value: newVariation.value,
                        productId: newVariation.productId,
                        restaurantId: newVariation.restaurantId,
                    })

                    await this.variationRepository.create(variation)
                }
            })
        )
    }
}