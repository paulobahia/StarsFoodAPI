import { Category } from 'src/product/domain/category'

export interface CategoryRepository {
    findById(id: number, restaurantId: number): Promise<Category | null>
    update(id: number, category: Category, restaurantId: number): Promise<void>
    updateStatus(id: number, status: boolean, restaurantId: number): Promise<void>
    create(category: Category): Promise<void>
    delete(id: number, restaurantId: number): Promise<void>
}