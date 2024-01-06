import { Either, left, right } from "@/core/either";
import { Injectable } from "@nestjs/common";
import { Category } from '@/domain/enterprise/entities/category'
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { CategoriesRepository } from "../repositores/categories-repository";
import { RestaurantsRepository } from "../repositores/restaurants-repository";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";

interface RegisterCategoryUseCaseRequest {
    name: string
    restaurantId: number
}

type RegisterCategoryUseCaseResponse = Either<
    ResourceNotFoundError,
    {
        category: Category
    }
>

@Injectable()
export class RegisterCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository, private restaurantsRepository: RestaurantsRepository) { }

    async execute({ name, restaurantId }: RegisterCategoryUseCaseRequest): Promise<RegisterCategoryUseCaseResponse> {
        const restaurant = await this.restaurantsRepository.findById(restaurantId)

        if (!restaurant) {
            return left(new ResourceNotFoundError())
        }

        const category = Category.create({
            name,
            restaurantId: new UniqueEntityID(restaurantId)
        })

        await this.categoriesRepository.create(category)

        return right({
            category
        })
    }
}