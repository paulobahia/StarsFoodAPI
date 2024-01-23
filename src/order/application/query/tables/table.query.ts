import { FindTablesResult } from "src/order/application/query/tables/find-tables-result";
import { FindTableByIdResult } from "./find-table-by-id.result";

export interface TableQuery {
    find(restaurantId: number): Promise<FindTablesResult>
    findById(id: number, restaurantId: number): Promise<FindTableByIdResult | null>
}
