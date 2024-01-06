import { Either, left, right } from "@/core/either";
import { NotAllowedError } from "@/core/errors/errors/not-allowed-error";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { Category } from "@/domain/enterprise/entities/category";
import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../repositores/categories-repository";


interface EditStatusCategoryUseCaseRequest {
    status: boolean
    categoryId: number
    restaurantId: number
}

type EditStatusCategoryUseCaseResponse = Either<
    ResourceNotFoundError | NotAllowedError,
    {
        category: Category
    }
>

@Injectable()
export class EditStatusCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { }

    async execute({ status, categoryId, restaurantId }: EditStatusCategoryUseCaseRequest): Promise<EditStatusCategoryUseCaseResponse> {
        const category = await this.categoriesRepository.findById(categoryId, restaurantId)

        if (!category) {
            return left(new ResourceNotFoundError())
        }

        category.status = status

        await this.categoriesRepository.updateStatus(category, restaurantId)

        return right({
            category
        })
    }
}