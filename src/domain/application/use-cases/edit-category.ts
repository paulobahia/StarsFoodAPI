import { Either, left, right } from "@/core/either";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { Category } from "@/domain/enterprise/entities/category";
import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../repositores/categories-repository";


interface EditCategoryUseCaseRequest {
    name: string
    categoryId: number
    restaurantId: number
}

type EditCategoryUseCaseResponse = Either<
    ResourceNotFoundError | NotAllowedError,
    {
        category: Category
    }
>

@Injectable()
export class EditCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { }

    async execute({ name, categoryId, restaurantId }: EditCategoryUseCaseRequest): Promise<EditCategoryUseCaseResponse> {
        const category = await this.categoriesRepository.findById(categoryId, restaurantId)

        if (!category) {
            return left(new ResourceNotFoundError())
        }

        category.name = name

        await this.categoriesRepository.update(category, restaurantId)

        return right({
            category
        })
    }
}