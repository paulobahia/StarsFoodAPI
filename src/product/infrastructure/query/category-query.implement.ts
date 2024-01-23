import { Injectable } from "@nestjs/common";

import { CategoryMapper } from "../mappers/category.mapper";
import { CategoryQuery } from "src/product/application/query/category/category.query";
import { FindCategoriesResult } from "src/product/application/query/category/find-categories.result";
import { StarFoodPrismaService } from "../../../shared/database/star-food.prisma.service";
import { FindCategoryByIdResult } from "src/product/application/query/category/find-category-by-id.result";

@Injectable()
export class CategoryQueryImplement implements CategoryQuery {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async find(restaurantId: number): Promise<FindCategoriesResult> {

        const categories = await this.prisma.categories.findMany({
            where: {
                RestaurantId: restaurantId,
                Active: true
            }
        })

        return { categories: categories.map(CategoryMapper.toDomain) }
    }

    async findById(id: number, restaurantId: number): Promise<FindCategoryByIdResult | null> {

        const category = await this.prisma.categories.findUnique({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            }
        })

        if (!category) {
            return null
        }

        return CategoryMapper.toDomain(category)
    }
}