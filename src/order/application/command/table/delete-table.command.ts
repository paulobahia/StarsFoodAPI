import { ICommand } from "@nestjs/cqrs";

export class DeleteTableCommand implements ICommand {
    constructor(
        readonly id: number,
        readonly restaurantId: number
    ) { }
}