import { Product } from "@/domain/enterprise/entities/product";
import { Variation } from "@/domain/enterprise/entities/variations";
import { Products as PrismaProduct } from '@prisma/client'

export abstract class ProductsRepository {
    abstract findMany(restaurantId: number): Promise<Product[]>
    abstract findById(productId: number, restaurantId: number): Promise<Product | null>
    abstract findByCategoryId(categoryId: number, restaurantId: number): Promise<Product[]>
    abstract findVariationByCategoryId(productId: number, restaurantId: number): Promise<Variation[] | null>
    abstract create(product: Product): Promise<PrismaProduct>
    abstract update(product: Product, restaurantId: number): Promise<void>
    abstract updateStatus(product: Product, restaurantId: number): Promise<void>
    abstract delete(productId: number, restaurantId: number): Promise<void>
}
