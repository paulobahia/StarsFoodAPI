import { ICommand } from "@nestjs/cqrs";

export class UpdateCategoryCommand implements ICommand {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly restaurantId: number
    ) { }
}