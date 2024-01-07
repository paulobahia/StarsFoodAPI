import { Either, left, right } from "@/core/either";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "../repositores/products-repository";
import { Product } from "@/domain/enterprise/entities/product";

interface FetchProductsUseCaseRequest {
    restaurantId: number,
    productId: number
}

type FetchProductsUseCaseResponse = Either<
    ResourceNotFoundError,
    {
        product: Product
    }
>

@Injectable()
export class FetchProductsUseCase {
    constructor(private productsRepository: ProductsRepository) { }

    async execute({ restaurantId, productId }: FetchProductsUseCaseRequest): Promise<FetchProductsUseCaseResponse> {
        const product = await this.productsRepository.findById(productId, restaurantId)

        if (!product) {
            return left(new ResourceNotFoundError())
        }

        return right({
            product
        })
    }
}