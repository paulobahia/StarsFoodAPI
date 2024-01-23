import { ICommand } from "@nestjs/cqrs";

export class UpdateVariationCommand implements ICommand {
    constructor(readonly variations: Readonly<{
        readonly id?: number,
        readonly name: string,
        readonly value: string,
        readonly restaurantId: number,
        readonly productId: number,
    }>[], readonly productId: number, readonly restaurantId: number
    ) { }
}