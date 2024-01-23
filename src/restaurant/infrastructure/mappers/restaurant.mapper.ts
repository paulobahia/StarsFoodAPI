import { Prisma, Restaurants } from "prisma/generated/StarFood";
import { RestaurantEntity } from "../entity/restaurant.entity";

export class RestaurantMapper {
    static toDomain(raw: Restaurants): RestaurantEntity {
        return {
            id: raw.Id,
            name: raw.Name,
            restaurantId: raw.RestaurantId,
            active: raw.Active,
        }
    }

    static toPrisma(category: RestaurantEntity): Prisma.RestaurantsUncheckedCreateInput {
        return {
            Name: category.name,
            RestaurantId: category.restaurantId,
        }
    }
}