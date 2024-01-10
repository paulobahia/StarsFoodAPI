import { BadRequestException, Injectable } from "@nestjs/common";
import { StarFoodPrismaService } from "src/modules/prisma/services/star-food.prisma.service";
import { CategoryEntity } from "../entities/category.entity";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { HandleStatusCategoryDto } from "../dto/handle-status-category-dto";

@Injectable()
export class CategoryRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findUnique(RestaurantId: string, CategoryId: string): Promise<CategoryEntity | null> {
        try {
            return await this.prisma.categories.findUnique({
                where: { RestaurantId: parseInt(RestaurantId, 10), Id: parseInt(CategoryId, 10), Active: true },
            }) as CategoryEntity | null
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findAll(RestaurantId: string): Promise<CategoryEntity[] | null> {
        try {
            const Catogories = await this.prisma.categories.findMany({
                where: { RestaurantId: parseInt(RestaurantId), Active: true },
                include: {
                    Restaurant: true
                },
                orderBy: {
                    CreatedTime: 'desc'
                }
            })
            return Catogories as CategoryEntity[] | null
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async create(RestaurantId: string, data: CreateCategoryDto) {
        const { name } = data
        try {
            return await this.prisma.categories.create({
                data: {
                    Name: name,
                    RestaurantId: parseInt(RestaurantId, 10)
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async update(RestaurantId: string, CategoryId: string, newCategory: UpdateCategoryDto) {
        const { name } = newCategory
        try {
            return await this.prisma.categories.update({
                where: { RestaurantId: parseInt(RestaurantId, 10), Id: parseInt(CategoryId, 10) },
                data: {
                    Name: name
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async handleStatus(RestaurantId: string, CategoryId: string, data: HandleStatusCategoryDto) {
        try {
            const { status } = data
            return await this.prisma.categories.update({
                where: { Id: parseInt(CategoryId, 10), RestaurantId: parseInt(RestaurantId, 10) },
                data: {
                    Status: status
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async delete(RestaurantId: string, CategoryId: string) {
        await this.prisma.categories.update({
            where: { Id: parseInt(CategoryId, 10), RestaurantId: parseInt(RestaurantId, 10) },
            data: {
                Active: false
            }
        })
    }
}