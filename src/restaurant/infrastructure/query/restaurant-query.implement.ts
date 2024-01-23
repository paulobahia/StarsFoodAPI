import { Injectable } from "@nestjs/common";
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service";
import { FindRestaurantByIdResult } from "src/restaurant/application/query/find-restaurant-by-id.result";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";
import { RestaurantMapper } from "../mappers/restaurant.mapper";

@Injectable()
export class RestaurantQueryImplement implements RestaurantQuery {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findById(id: number): Promise<FindRestaurantByIdResult | null> {

        const restaurant = await this.prisma.restaurants.findUnique({
            where: {
                RestaurantId: id,
                Active: true
            }
        })

        if (!restaurant) {
            return null
        }

        return RestaurantMapper.toDomain(restaurant)
    }
}