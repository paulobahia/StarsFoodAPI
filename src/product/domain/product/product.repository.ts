import { Product } from "./product";
import { Products as PrismaProducts } from "prisma/generated/StarFood";

export interface ProductRepository {
    findById(id: number, restaurantId: number): Promise<Product | null>
    findByVariationsIds(variationIds: Array<number>, restaurantId: number): Promise<PrismaProducts[] | null>
    update(id: number, product: Product, restaurantId: number): Promise<void>
    updateStatus(id: number, status: boolean, restaurantId: number): Promise<void>
    create(product: Product): Promise<PrismaProducts>
    delete(id: number, restaurantId: number): Promise<void>
}