import { IQuery } from '@nestjs/cqrs';

export class FindTableByIdQuery implements IQuery {
    constructor(
        readonly id: number,
        readonly restaurantId: number
    ) { }
}