import { FindOrdersResult } from "./find-orders-result";

export interface OrderQuery {
    find(restaurantId: number): Promise<FindOrdersResult>
}