import { Category } from '@/domain/enterprise/entities/category'

export abstract class CategoriesRepository {
    abstract findById(categoryId: number, restaurantId: number): Promise<Category | null>
    abstract findMany(restaurantId: number): Promise<Category[]>
    abstract create(category: Category): Promise<void>
    abstract update(category: Category, restaurantId: number): Promise<void>
    abstract updateStatus(category: Category, restaurantId: number): Promise<void>
    abstract delete(categoryId: number, restaurantId: number): Promise<void>
}