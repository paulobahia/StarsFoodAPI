import { IQueryResult } from "@nestjs/cqrs";

export class FindTablesResult implements IQueryResult {
    constructor(readonly tables: Readonly<{
        id: number;
        status: boolean;
        number: number;
        barcode: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        restaurantId: number;
        active: boolean;
    }>[],
    ) { }
}