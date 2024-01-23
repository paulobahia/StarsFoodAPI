import { ICommand } from "@nestjs/cqrs";

export class UpdateStatusOrderCommand implements ICommand {
    constructor(
        readonly id: number,
        readonly status: string,
        readonly restaurantId: number
    ) { }
}