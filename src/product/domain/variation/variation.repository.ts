import { Variation } from "./variation";
import { Variations } from "prisma/generated/StarFood";

export interface VariationRepository {
    findByProductId(id: number, restaurantId: number): Promise<Variations[] | null>
    update(id: number, variation: Variation, restaurantId: number): Promise<void>
    create(variation: Variation): Promise<void>
    createMany(variation: Variation[]): Promise<void>
    delete(variation: Variation[]): Promise<void>
}