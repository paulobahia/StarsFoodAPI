import { ICommand } from "@nestjs/cqrs";

class UpdateVariationCommand {
    readonly id?: number;
    readonly name: string;
    readonly value: string;
}

export class UpdateProductCommand implements ICommand {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly description: string,
        readonly imgUrl: Array<string>,
        readonly categoryId: number,
        readonly variations: UpdateVariationCommand[],
        readonly restaurantId: number
    ) { }
}