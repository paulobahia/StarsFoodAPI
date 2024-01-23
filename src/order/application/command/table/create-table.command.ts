import { ICommand } from "@nestjs/cqrs";

export class CreateTableCommand implements ICommand {
    constructor(
        readonly number: number,
        readonly restaurantId: number
    ) { }
}