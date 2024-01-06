import { Either, left, right } from "@/core/either";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../repositores/categories-repository";
import { Category } from "@/domain/enterprise/entities/category";

interface FetchCategoriesUseCaseRequest {
    restaurantId: number,
    categoryId: number
}

type FetchCategoriesUseCaseResponse = Either<
    ResourceNotFoundError,
    {
        category: Category
    }
>

@Injectable()
export class FetchCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { }

    async execute({ restaurantId, categoryId }: FetchCategoriesUseCaseRequest): Promise<FetchCategoriesUseCaseResponse> {
        const category = await this.categoriesRepository.findById(categoryId, restaurantId)

        if (!category) {
            return left(new ResourceNotFoundError())
        }

        return right({
            category
        })
    }
}