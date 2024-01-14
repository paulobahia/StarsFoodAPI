import { ICommand } from "@nestjs/cqrs";

export class UpdateStatusCategoryCommand implements ICommand {
    constructor(
        readonly id: number,
        readonly status: boolean,
        readonly restaurantId: number
    ) { }
}