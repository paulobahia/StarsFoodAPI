import { FindCategoriesResult } from "./find-categories.result";
import { FindCategoryByIdResult } from "./find-category-by-id.result";

export interface CategoryQuery {
    find(restaurantId: number): Promise<FindCategoriesResult>
    findById(id: number, restaurantId: number): Promise<FindCategoryByIdResult | null>
}