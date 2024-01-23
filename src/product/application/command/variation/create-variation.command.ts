import { ICommand } from "@nestjs/cqrs";

export class CreateVariationCommand implements ICommand {
    constructor(readonly variations: Readonly<{
        readonly name: string,
        readonly value: string,
        readonly restaurantId: number,
        readonly productId: number,
    }>[],
    ) { }
}