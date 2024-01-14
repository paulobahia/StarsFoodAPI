import { Category } from "src/product/domain/category";
import { CategoryRepository } from "src/product/domain/category.repository";
import { CategoryEntity } from "../entity/category.entity";
import { Prisma, Categories } from "prisma/generated/StarFood";
import { StarFoodPrismaService } from "../database/star-food.prisma.service";
import { Inject, Injectable } from "@nestjs/common";
import { CategoryFactory } from "src/product/domain/category.factory";

@Injectable()
export class CategoryRepositoryImplement implements CategoryRepository {
    @Inject() private readonly categoryFactory: CategoryFactory;
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findById(id: number, restaurantId: number): Promise<Category | null> {
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

        return this.entityToModel(category)
    }

    async update(id: number, data: Category, restaurantId: number): Promise<void> {
        const category = this.modelToEntity(data)

        await this.prisma.categories.update({
            where: {
                Id: id,
                RestaurantId: restaurantId
            },
            data: {
                Name: category.Name,
                UpdateTime: new Date()
            }
        })
    }

    async updateStatus(id: number, status: boolean, restaurantId: number): Promise<void> {
        await this.prisma.categories.update({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            },
            data: {
                Status: status
            }
        })
    }

    async create(data: Category): Promise<void> {
        const category = this.modelToEntity(data)

        await this.prisma.categories.create({
            data: {
                Name: category.Name,
                RestaurantId: category.RestaurantId
            }
        })
    }

    async delete(id: number, restaurantId: number): Promise<void> {
        await this.prisma.categories.update({
            where: {
                Id: id,
                RestaurantId: restaurantId
            },
            data: {
                Active: false
            }
        })
    }

    private modelToEntity(model: Category): Prisma.CategoriesUncheckedCreateInput {
        const property = JSON.parse(JSON.stringify(model)) as CategoryEntity;
        return {
            Name: property.name,
            RestaurantId: property.restaurantId,
            Status: property.status,
        }
    }

    private entityToModel(entity: Categories): Category {
        return this.categoryFactory.reconstitute({
            name: entity.Name,
            restaurantId: entity.RestaurantId,
            status: entity.Status,
            active: entity.Active,
            createdTime: entity.CreatedTime,
            updatedTime: entity.UpdateTime
        });
    }
}