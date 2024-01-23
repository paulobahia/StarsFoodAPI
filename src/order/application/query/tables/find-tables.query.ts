import { IQuery } from '@nestjs/cqrs';

export class FindTablesQuery implements IQuery {
    constructor(readonly restaurantId: number) { }
}