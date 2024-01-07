import { VariationsRepository } from "@/domain/application/repositores/variations-repository";
import { Variation } from "@/domain/enterprise/entities/variations";
import { Injectable } from "@nestjs/common";
import { PrismaVariationMapper } from "../mappers/prisma-variation-mapper";
import { StarFoodPrismaService } from "../star-food.prisma.service";

@Injectable()
export class PrismaVariationsRepository implements VariationsRepository {
    constructor(private prisma: StarFoodPrismaService) { }

    async findById(variationId: number, restaurantId: number): Promise<Variation | null> {
        const variation = await this.prisma.variations.findUnique({
            where: { Id: variationId, RestaurantId: restaurantId },
        })

        if (!variation) {
            return null
        }

        return PrismaVariationMapper.toDomain(variation)
    }

    async create(variation: Variation): Promise<void> {

    }

    async createMany(variations: Variation[]): Promise<void> {
        const variationsData = variations.map(PrismaVariationMapper.toPrisma)

        await this.prisma.variations.createMany({
            data: variationsData.map((variations) => ({
                Name: variations.Name,
                Value: variations.Value,
                ProductId: variations.ProductId,
                RestaurantId: variations.RestaurantId
            }))
        })
    }

    async update(variation: Variation, restaurantId: number): Promise<void> {

    }

    async deleteMany(variations: Variation[], restaurantId: number): Promise<void> {
        await this.prisma.variations.updateMany({
            where: {
                Id: { in: variations.map((item) => item.id.toValue()) },
                RestaurantId: restaurantId
            },
            data: {
                Active: false
            }
        })
    }
}