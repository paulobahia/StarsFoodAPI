import { ICommand } from "@nestjs/cqrs";

export class DeleteCategoryCommand implements ICommand {
    constructor(
        readonly id: number,
        readonly restaurantId: number
    ) { }
}