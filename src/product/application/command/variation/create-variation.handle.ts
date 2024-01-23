import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateVariationCommand } from "./create-variation.command";
import { Inject } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { VariationRepository } from "src/product/domain/variation/variation.repository";
import { VariationFactory } from "src/product/domain/variation/variation.factory";

@CommandHandler(CreateVariationCommand)
export class CreateVariationHandler implements ICommandHandler<CreateVariationCommand, void> {

    @Inject(InjectionToken.VARIATION_REPOSITORY)
    private readonly variationRepository: VariationRepository
    @Inject() private readonly variationFactory: VariationFactory

    async execute(command: CreateVariationCommand): Promise<void> {

        const variationsFactory = command.variations.map((variation) => this.variationFactory.create({
            name: variation.name,
            value: variation.value,
            restaurantId: variation.restaurantId,
            productId: variation.productId
        }))

        await this.variationRepository.createMany(variationsFactory)
    }
}