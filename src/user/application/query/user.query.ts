import { FindUserByIdResult } from "./find-user-by-id.result";

export interface UserQuery {
    findById(id: number, restaurantId: number): Promise<FindUserByIdResult | null>
}