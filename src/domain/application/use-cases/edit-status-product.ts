import { Either, left, right } from "@/core/either";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { Category } from "@/domain/enterprise/entities/category";
import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../repositores/categories-repository";
import { Product } from "@/domain/enterprise/entities/product";
import { ProductsRepository } from "../repositores/products-repository";


interface EditStatusProductUseCaseRequest {
    status: boolean
    productId: number
    restaurantId: number
}

type EditStatusProductUseCaseResponse = Either<
    ResourceNotFoundError | NotAllowedError,
    {
        product: Product
    }
>

@Injectable()
export class EditStatusProductUseCase {
    constructor(private productsRepository: ProductsRepository) { }

    async execute({ status, productId, restaurantId }: EditStatusProductUseCaseRequest): Promise<EditStatusProductUseCaseResponse> {
        const product = await this.productsRepository.findById(productId, restaurantId)

        if (!product) {
            return left(new ResourceNotFoundError())
        }

        product.status = status

        await this.productsRepository.updateStatus(product, restaurantId)

        return right({
            product
        })
    }
}