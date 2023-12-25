import { Injectable } from '@nestjs/common';
import { Restaurants } from '@prisma/client';
import { RestaurantsRepository } from './restaurants.repository';

@Injectable()
export class RestaurantsService {
    constructor(private readonly restaurantsRepository: RestaurantsRepository) { }

    async getRestaurantById(restaurantId: string): Promise<Restaurants | null> {
        return await this.restaurantsRepository.findRestaurantById(restaurantId)
    }
}
