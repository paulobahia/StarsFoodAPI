import { Injectable } from '@nestjs/common';
import { StarFoodPrismaService } from '../prisma/services/star-food.prisma.service';
import { Restaurants } from '@prisma/client';

@Injectable()
export class RestaurantsRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findRestaurantById(RestaurantId: string): Promise<Restaurants | null> {
        return this.prisma.restaurants.findUnique({
            where: { RestaurantId: parseInt(RestaurantId) }
        })
    }
}