import { Either, left, right } from "@/core/either";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { Product } from "@/domain/enterprise/entities/product";
import { Injectable } from "@nestjs/common";
import { RestaurantsRepository } from "../repositores/restaurants-repository";
import { CreateVariationDto } from "@/domain/enterprise/dtos/create-variation-dto";
import { ProductsRepository } from "../repositores/products-repository";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Variation } from "@/domain/enterprise/entities/variations";
import { VariationsRepository } from "../repositores/variations-repository";

interface RegisterProductUseCaseRequest {
    name: string
    restaurantId: number
    description: string;
    imgUrl: Array<string>;
    categoryId: number;
    variations: CreateVariationDto[];
}

type RegisterProductUseCaseResponse = Either<
    ResourceNotFoundError,
    {
        product: Product
    }
>

@Injectable()
export class RegisterProductUseCase {
    constructor(private productsRepository: ProductsRepository, private variationRepository: VariationsRepository, private restaurantsRepository: RestaurantsRepository) { }

    async execute({ name, description, imgUrl, categoryId, variations, restaurantId }: RegisterProductUseCaseRequest): Promise<RegisterProductUseCaseResponse> {
        const restaurant = await this.restaurantsRepository.findById(restaurantId)

        if (!restaurant) {
            return left(new ResourceNotFoundError())
        }

        const createProduct = Product.create({
            name,
            description,
            imgUrl,
            categoryId: new UniqueEntityID(categoryId),
            restaurantId: new UniqueEntityID(restaurantId),
        })

        const product = await this.productsRepository.create(createProduct)

        const createVariation = variations.map((variation) => {
            return Variation.create({
                name: variation.name,
                value: variation.value,
                productId: new UniqueEntityID(product.Id),
                restaurantId: new UniqueEntityID(restaurantId)
            })
        })

        await this.variationRepository.createMany(createVariation)

        return right({
            product: createProduct
        })
    }
}
