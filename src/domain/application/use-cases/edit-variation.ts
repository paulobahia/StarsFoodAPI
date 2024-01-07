import { Either, left, right } from "@/core/either"
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error"
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error"
import { Variation } from "@/domain/enterprise/entities/variations"
import { VariationsRepository } from "../repositores/variations-repository"
import { ProductsRepository } from "../repositores/products-repository"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

interface EditVariationUseCaseRequest {
    variation: {
        variationId: number
        name: string
        value: string
        restaurantId: number
    }
    productId: number
}

type EditVariationUseCaseResponse = Either<
    ResourceNotFoundError | NotAllowedError,
    {
        variation: Variation[]
    }
>

export class EditVariationUseCase {
    constructor(private variationsRepository: VariationsRepository, private productsRepository: ProductsRepository) { }

    async execute(variations: EditVariationUseCaseRequest[]): Promise<EditVariationUseCaseResponse> {
        const productId = variations[0].productId
        const restaurantId = variations[0].variation.restaurantId

        const existingVariations = await this.productsRepository.findVariationByCategoryId(productId, restaurantId)

        if (!existingVariations) {
            return left(new ResourceNotFoundError())
        }

        const variationsToRemove = existingVariations.filter((variation) =>
            variations.every((newVariations) => newVariations.variation.variationId !== variation.id.toValue())
        );

        await this.variationsRepository.deleteMany(variationsToRemove, restaurantId)

        await Promise.all(
            variations.map(async ({ variation }) => {
                const existingVariation = existingVariations.find(
                    (variation) => variation.id.toValue() === variation.id.toValue()
                );

                const variationData = Variation.create({
                    name: variation.name,
                    value: variation.value,
                    productId: new UniqueEntityID(productId),
                    restaurantId: new UniqueEntityID(restaurantId)
                })

                if (existingVariation) {
                    const variationId = existingVariation.id.toValue()
                    await this.variationsRepository.update(variationData, variationId, restaurantId)
                } else {
                    await this.variationsRepository.create(variationData, productId)
                }
            })
        )

        return right({
            variation: existingVariations
        })
    }
}