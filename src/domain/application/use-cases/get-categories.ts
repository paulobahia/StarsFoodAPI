import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "../repositores/categories-repository";
import { Either, right } from "src/core/either";
import { Category } from '@/domain/enterprise/entities/category'

interface GetCategoriesUseCaseRequest {
    restaurantId: number
}

type GetCategoriesUseCaseResponse = Either<
    null,
    {
        categories: Category[]
    }
>

@Injectable()
export class GetCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { }

    async execute({ restaurantId }: GetCategoriesUseCaseRequest): Promise<GetCategoriesUseCaseResponse> {
        const categories = await this.categoriesRepository.findMany(restaurantId)

        return right({
            categories
        })
    }
}