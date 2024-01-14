import { FindRestaurantByIdResult } from "./find-restaurant-by-id.result";

export interface RestaurantQuery {
    findById(id: number): Promise<FindRestaurantByIdResult | null>
}