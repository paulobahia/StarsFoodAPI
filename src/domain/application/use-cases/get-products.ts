import { Injectable } from "@nestjs/common";
import { Either, right } from "src/core/either";
import { Product } from "@/domain/enterprise/entities/product";
import { ProductsRepository } from "../repositores/products-repository";

interface GetProductsUseCaseRequest {
    restaurantId: number
}

type GetProductsUseCaseResponse = Either<
    null,
    {
        products: Product[]
    }
>

@Injectable()
export class GetProductsUseCase {
    constructor(private productsRepository: ProductsRepository) { }

    async execute({ restaurantId }: GetProductsUseCaseRequest): Promise<GetProductsUseCaseResponse> {
        const products = await this.productsRepository.findMany(restaurantId)

        return right({
            products
        })
    }
}