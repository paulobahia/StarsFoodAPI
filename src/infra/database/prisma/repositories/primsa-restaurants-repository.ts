import { RestaurantsRepository } from "@/domain/application/repositores/restaurants-repository";
import { StarFoodPrismaService } from "../star-food.prisma.service";
import { Injectable } from "@nestjs/common";
import { Restaurant } from "@/domain/enterprise/entities/restaurant";
import { PrismaRestaurantMapper } from "../mappers/prisma-restaurant-mapper";

@Injectable()
export class PrismaRestaurantsRepository implements RestaurantsRepository {
    constructor(private prisma: StarFoodPrismaService) { }

    async findById(id: number): Promise<Restaurant | null> {
        const restaurant = await this.prisma.restaurants.findUnique({
            where: {
                RestaurantId: id
            }
        })

        if (!restaurant) {
            return null
        }

        return PrismaRestaurantMapper.toDomain(restaurant)
    }
}