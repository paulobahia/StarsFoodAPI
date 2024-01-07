import { Either, left, right } from "@/core/either"
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error"
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error"
import { Product } from "@/domain/enterprise/entities/product"
import { ProductsRepository } from "../repositores/products-repository"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

interface EditProductUseCaseRequest {
    name: string
    categoryId: number
    productId: number
    restaurantId: number
    description: string,
    imgUrl: string[],
}

type EditProductUseCaseResponse = Either<
    ResourceNotFoundError | NotAllowedError,
    {
        product: Product
    }
>

export class EditProductUseCase {
    constructor(private productsRepository: ProductsRepository) { }

    async execute({ name, description, imgUrl, productId, categoryId, restaurantId }: EditProductUseCaseRequest): Promise<EditProductUseCaseResponse> {
        const product = await this.productsRepository.findById(productId, restaurantId)

        if (!product) {
            return left(new ResourceNotFoundError())
        }

        product.name = name;
        product.description = description;
        product.imgUrl = imgUrl;
        product.categoryId = new UniqueEntityID(categoryId);

        await this.productsRepository.update(product, restaurantId)

        return right({
            product
        })
    }
}