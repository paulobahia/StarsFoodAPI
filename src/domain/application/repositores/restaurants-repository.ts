import { Restaurant } from "@/domain/enterprise/entities/restaurant";

export abstract class RestaurantsRepository {
    abstract findById(id: number): Promise<Restaurant | null>
}