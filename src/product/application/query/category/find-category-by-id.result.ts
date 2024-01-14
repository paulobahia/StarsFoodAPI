import { IQueryResult } from "@nestjs/cqrs";

export class FindCategoryByIdResult implements IQueryResult {
    readonly id: number;
    readonly name: string;
    readonly createdTime: Date;
    readonly updateTime: Date;
    readonly restaurantId: number;
    readonly status: boolean;
    readonly active: boolean;
}