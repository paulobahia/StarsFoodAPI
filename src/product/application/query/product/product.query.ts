import { FindProductByIdResult } from "./find-product-by-id.result";
import { FindProductsResult } from "./find-products.result";

export interface ProductQuery {
    find(restaurantId: number): Promise<FindProductsResult>
    findById(id: number, restaurantId: number): Promise<FindProductByIdResult | null>
}