import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../repositores/products-repository";
import { Either, left, right } from "@/core/either";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";
import { Product } from "@/domain/enterprise/entities/product";

interface DeleteProductUseCaseRequest {
    productId: number
    restaurantId: number
}

type DeleteProductUseCaseResponse = Either<
    ResourceNotFoundError | NotAllowedError,
    {
        product: Product
    }
>

@Injectable()
export class DeleteProductUseCase {
    constructor(private productsRepository: ProductsRepository) { }

    async execute({ productId, restaurantId }: DeleteProductUseCaseRequest): Promise<DeleteProductUseCaseResponse> {
        const product = await this.productsRepository.findById(productId, restaurantId)

        if (!product) {
            return left(new ResourceNotFoundError())
        }

        await this.productsRepository.delete(productId, restaurantId)

        return right({
            product
        })
    }

}