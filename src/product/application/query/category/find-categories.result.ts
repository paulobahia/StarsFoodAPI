import { IQueryResult } from '@nestjs/cqrs';

export class FindCategoriesResult implements IQueryResult {
    constructor(readonly categories: Readonly<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        restaurantId: number;
        status: boolean;
        active: boolean;
    }>[],
    ) { }
}