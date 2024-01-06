import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../repositores/categories-repository";
import { Either, left, right } from "@/core/either";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";
import { Category } from "@/domain/enterprise/entities/category";
import { ProductsRepository } from "../repositores/products-repository";
import { ResourceInUseError } from "@/core/errors/errors/resource-in-use-error";

interface DeleteCategoryUseCaseRequest {
    categoryId: number
    restaurantId: number
}

type DeleteCategoryUseCaseResponse = Either<
    ResourceNotFoundError | NotAllowedError,
    {
        category: Category
    }
>

@Injectable()
export class DeleteCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository, private productsRepository: ProductsRepository) { }

    async execute({ categoryId, restaurantId }: DeleteCategoryUseCaseRequest): Promise<DeleteCategoryUseCaseResponse> {
        const category = await this.categoriesRepository.findById(categoryId, restaurantId)

        if (!category) {
            return left(new ResourceNotFoundError())
        }

        const products = await this.productsRepository.findByCategoryId(categoryId, restaurantId)

        if (products.length > 0) {
            return left(new ResourceInUseError())
        }

        await this.categoriesRepository.delete(categoryId, restaurantId)

        return right({
            category
        })
    }

}