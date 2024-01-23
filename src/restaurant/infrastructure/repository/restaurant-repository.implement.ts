import { Inject, Injectable } from "@nestjs/common";
import { Prisma, Restaurants as RestaurantPrisma } from "prisma/generated/StarFood";
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service";
import { Restaurant } from "src/restaurant/domain/restaurant";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { RestaurantEntity } from "../entity/restaurant.entity";
import { RestaurantFactory } from "src/restaurant/domain/restaurant.factory";

@Injectable()
export class RestaurantRepositoryImplement implements RestaurantRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }
    @Inject() private readonly restaurantFactory: RestaurantFactory

    async findById(id: number): Promise<Restaurant | null> {

        const restaurant = await this.prisma.restaurants.findUnique({
            where: {
                RestaurantId: id,
                Active: true
            }
        })

        if (!restaurant) {
            return null
        }

        return this.entityToModel(restaurant)
    }

    private modelToEntity(model: Restaurant): Prisma.RestaurantsUncheckedCreateInput {
        const property = JSON.parse(JSON.stringify(model)) as RestaurantEntity;
        return {
            Name: property.name,
            RestaurantId: property.restaurantId
        }
    }

    private entityToModel(entity: RestaurantPrisma): Restaurant {
        return this.restaurantFactory.reconstitute({
            name: entity.Name,
            restaurantId: entity.RestaurantId,
            active: entity.Active,
            createdAt: entity.CreatedAt,
            updatedAt: entity.UpdatedAt,
            deletedAt: entity.DeletedAt
        });
    }
}