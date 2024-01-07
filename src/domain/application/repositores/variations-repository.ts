import { Variation } from "@/domain/enterprise/entities/variations";

export abstract class VariationsRepository {
    abstract findById(variationId: number, restaurantId: number): Promise<Variation | null>
    abstract create(variation: Variation, productId: number): Promise<void>
    abstract createMany(variations: Variation[]): Promise<void>
    abstract update(variation: Variation, variationId: number, restaurantId: number): Promise<void>
    abstract deleteMany(variations: Variation[], restaurantId: number): Promise<void>
}