import { IQueryResult } from "@nestjs/cqrs";

export class FindRestaurantByIdResult implements IQueryResult {
    readonly id: number;
    readonly name: string;
    readonly restaurantId: number;
    readonly active: boolean;
}