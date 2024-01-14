import { IQuery } from '@nestjs/cqrs';

export class FindCategoryByIdQuery implements IQuery {
    constructor(
        readonly id: number,
        readonly restaurantId: number
    ) { }
}