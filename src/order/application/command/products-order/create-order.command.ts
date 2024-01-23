import { ICommand } from "@nestjs/cqrs";

class Variations {
    readonly quantity: number;
    readonly variationId: number;
}

export class CreateProductOrderCommand implements ICommand {
    constructor(
        readonly variations: Variations[],
        readonly orderId: number,
        readonly restaurantId: number,
    ) { }
}