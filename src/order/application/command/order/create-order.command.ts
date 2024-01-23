import { ICommand } from "@nestjs/cqrs";

class Variations {
    readonly quantity: number;
    readonly variationId: number;
}

export class CreateOrderCommand implements ICommand {
    constructor(
        readonly tableId: number,
        readonly variations: Variations[],
        readonly userId: number,
        readonly restaurantId: number,
    ) { }
}