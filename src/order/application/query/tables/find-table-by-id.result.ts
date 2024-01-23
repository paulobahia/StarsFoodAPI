import { IQueryResult } from "@nestjs/cqrs";

export class FindTableByIdResult implements IQueryResult {
    readonly id: number;
    readonly number: number;
    readonly barcode: string;
    readonly status: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date | null;
    readonly restaurantId: number;
    readonly active: boolean;
}