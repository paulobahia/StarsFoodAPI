import { ICommand } from "@nestjs/cqrs";

export class UpdateStatusTableCommand implements ICommand {
    constructor(
        readonly id: number,
        readonly status: boolean,
        readonly restaurantId: number
    ) { }
}