import { IQuery } from '@nestjs/cqrs';

export class FindProductsQuery implements IQuery {
    constructor(readonly restaurantId: number) { }
}