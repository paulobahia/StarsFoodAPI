import { IQueryResult } from '@nestjs/cqrs';

export class FindCategoriesResult implements IQueryResult {
    constructor(readonly categories: Readonly<{
        id: number;
        name: string;
        createdTime: Date;
        updateTime: Date;
        restaurantId: number;
        status: boolean;
        active: boolean;
    }>[],
    ) { }
}