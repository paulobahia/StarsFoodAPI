import { Injectable, BadRequestException } from '@nestjs/common';
import { StarFoodPrismaService } from '../../prisma/services/star-food.prisma.service';
import { CreateVariationDto } from '../dto/create-variation.dto';
import { Variations } from '@prisma/client';
import { UpdateVariationDto } from '../dto/update-variation.dto';

@Injectable()
export class VariationsRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async createMany(RestaurantId: string, ProductId: number, createVariationDto: CreateVariationDto[]) {
        try {
            return await this.prisma.variations.createMany({
                data: createVariationDto.map((variation) => ({
                    Name: variation.name,
                    Value: variation.value,
                    ProductId,
                    RestaurantId: parseInt(RestaurantId, 10),
                }))
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async create(RestaurantId: string, ProductId: string, newVariation: CreateVariationDto) {
        try {
            return await this.prisma.variations.create({
                data: {
                    Name: newVariation.name,
                    Value: newVariation.value,
                    ProductId: parseInt(ProductId, 10),
                    RestaurantId: parseInt(RestaurantId, 10),
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async update(RestaurantId: string, VariationId: number, updateVariation: UpdateVariationDto) {
        try {
            return await this.prisma.variations.update({
                where: { RestaurantId: parseInt(RestaurantId, 10), Id: VariationId },
                data: {
                    Name: updateVariation.name,
                    Value: updateVariation.value
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async inactivateVariation(Variations: Variations[]) {
        try {
            return await this.prisma.variations.updateMany({
                where: {
                    Id: { in: Variations.map((item) => item.Id) }
                },
                data: {
                    Active: false
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

}