import { Prisma, Restaurants as PrismaRestaurant } from "@prisma/client";
import { Restaurant } from "@/domain/enterprise/entities/restaurant";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export class PrismaRestaurantMapper {
    static toDomain(raw: PrismaRestaurant): Restaurant {
        return Restaurant.create({
            name: raw.Name,
            restaurantId: raw.RestaurantId,
            active: raw.Active
        },
            new UniqueEntityID(raw.Id)
        )
    }

    static toPrisma(restaurant: Restaurant): Prisma.RestaurantsUncheckedCreateInput {
        return {
            Id: restaurant.id.toValue(),
            Name: restaurant.name,
            RestaurantId: restaurant.restaurantId
        }
    }
}