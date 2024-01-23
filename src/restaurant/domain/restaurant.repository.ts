import { Restaurant } from './restaurant'

export interface RestaurantRepository {
    findById(id: number): Promise<Restaurant | null>
}