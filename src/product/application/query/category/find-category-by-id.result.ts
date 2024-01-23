import { IQueryResult } from "@nestjs/cqrs";

export class FindCategoryByIdResult implements IQueryResult {
    readonly id: number;
    readonly name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date | null;
    readonly restaurantId: number;
    readonly status: boolean;
    readonly active: boolean;
}