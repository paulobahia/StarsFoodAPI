import { Restaurant, RestaurantImplement, RestaurantProperties } from "./restaurant";

type CreateRestaurantOptions = Readonly<{
    name: string;
    restaurantId: number;
}>;

export class RestaurantFactory {

    create(options: CreateRestaurantOptions): Restaurant {
        return new RestaurantImplement({
            ...options,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            active: true
        })
    }

    reconstitute(properties: RestaurantProperties): Restaurant {
        return new RestaurantImplement(properties)
    }
}