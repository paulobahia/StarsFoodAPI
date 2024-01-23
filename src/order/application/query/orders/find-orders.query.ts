import { IQuery } from '@nestjs/cqrs';

export class FindOrdersQuery implements IQuery {
    constructor(readonly restaurantId: number) { }
}