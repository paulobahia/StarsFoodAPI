import { ICommand } from "@nestjs/cqrs";

class CreateVariationCommand {
    readonly name: string;
    readonly value: string;
}

export class CreateProductCommand implements ICommand {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly imgUrl: Array<string>,
        readonly categoryId: number,
        readonly variations: CreateVariationCommand[],
        readonly restaurantId: number
    ) { }
}