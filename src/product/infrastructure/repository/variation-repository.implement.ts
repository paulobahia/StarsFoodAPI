import { Injectable } from "@nestjs/common";
import { VariationRepository } from "src/product/domain/variation/variation.repository";
import { Prisma, Variations } from "prisma/generated/StarFood";
import { StarFoodPrismaService } from "../../../shared/database/star-food.prisma.service";
import { Variation } from "src/product/domain/variation/variation";
import { VariationEntity } from "../entity/variation.entity";

@Injectable()
export class VariationRepositoryImplement implements VariationRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findByProductId(id: number, restaurantId: number): Promise<Variations[] | null> {
        const variations = await this.prisma.variations.findMany({
            where: {
                ProductId: id,
                RestaurantId: restaurantId,
                Active: true
            }
        })

        if (!variations) {
            return null
        }

        return variations
    }

    async update(id: number, data: Variation, restaurantId: number): Promise<void> {
        const variation = this.modelToEntity(data)

        await this.prisma.variations.update({
            where: {
                Id: id,
                RestaurantId: restaurantId
            },
            data: {
                Name: variation.Name,
                Value: variation.Value,
                UpdatedAt: new Date()
            }
        })
    }

    async create(data: Variation[]): Promise<void> {
        const variation = this.modelToEntity(data)

        await this.prisma.variations.create({
            data: {
                Restaurant: {
                    connect: {
                        Id: variation.RestaurantId
                    }
                },
                Products: {
                    connect: {
                        Id: variation.ProductId
                    }
                },
                Name: variation.Name,
                Value: variation.Value,
            }
        })
    }

    async createMany(data: Variation[]): Promise<void> {
        const variations = data.map(this.modelToEntity)

        await this.prisma.variations.createMany({
            data: variations.map((variation) => ({
                Name: variation.Name,
                Value: variation.Value,
                ProductId: variation.ProductId,
                RestaurantId: variation.RestaurantId,
            }))
        })
    }

    async delete(data: Variation[]): Promise<void> {
        const variations = data.map(this.modelToEntity)

        await this.prisma.variations.updateMany({
            where: {
                Id: { in: variations.map((variation) => variation.Id!) }
            },
            data: {
                Active: false,
                DeletedAt: new Date()
            }
        })
    }

    private modelToEntity(model: Variation): Prisma.VariationsUncheckedCreateInput {
        const property = JSON.parse(JSON.stringify(model)) as VariationEntity;
        return {
            Id: property.id,
            Name: property.name,
            Value: property.value,
            RestaurantId: property.restaurantId,
            ProductId: property.productId,
        }
    }
}