import { CategoriesRepository } from "@/domain/application/repositores/categories-repository";
import { Category } from "@/domain/enterprise/entities/category";
import { Injectable } from "@nestjs/common";
import { PrismaCategoryMapper } from "../mappers/prisma-category-mapper";
import { StarFoodPrismaService } from "../star-food.prisma.service";

@Injectable()
export class PrismaCategoriesRepository implements CategoriesRepository {
    constructor(private prisma: StarFoodPrismaService) { }

    async findMany(restaurantId: number): Promise<Category[]> {
        const categories = await this.prisma.categories.findMany({
            where: {
                RestaurantId: restaurantId
            }
        })

        return categories.map(PrismaCategoryMapper.toDomain)
    }

    async create(category: Category): Promise<void> {
        const data = PrismaCategoryMapper.toPrisma(category)

        await this.prisma.categories.create({
            data: {
                Name: data.Name,
                Restaurant: {
                    connect: { Id: data.RestaurantId }
                }
            }
        })
    }

    async findById(categoryId: number, restaurantId: number): Promise<Category | null> {
        const category = await this.prisma.categories.findUnique({
            where: {
                Id: categoryId,
                RestaurantId: restaurantId
            }
        })

        if (!category) {
            return null
        }

        return PrismaCategoryMapper.toDomain(category)
    }

    async update(category: Category, restaurantId: number): Promise<void> {
        const data = PrismaCategoryMapper.toPrisma(category)

        await this.prisma.categories.update({
            where: { Id: category.id.toValue(), RestaurantId: restaurantId },
            data: {
                Name: data.Name,
                UpdateTime: data.UpdateTime
            }
        })
    }

    async updateStatus(category: Category, restaurantId: number): Promise<void> {
        const data = PrismaCategoryMapper.toPrisma(category)

        await this.prisma.categories.update({
            where: { Id: category.id.toValue(), RestaurantId: restaurantId },
            data: {
                Status: data.Status,
                UpdateTime: data.UpdateTime
            }
        })
    }

    async delete(categoryId: number, restaurantId: number): Promise<void> {
        await this.prisma.categories.update({
            where: { Id: categoryId, RestaurantId: restaurantId },
            data: {
                Active: false
            }
        })
    }
}