import { IQuery } from '@nestjs/cqrs';

export class FindCategoriesQuery implements IQuery {
    constructor(readonly restaurantId: number) { }
}