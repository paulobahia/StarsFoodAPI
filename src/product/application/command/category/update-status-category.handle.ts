import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { Inject, NotFoundException } from "@nestjs/common"
import { InjectionToken } from "../../injection-token"
import { CategoryRepository } from "src/product/domain/category.repository"
import { UpdateStatusCategoryCommand } from "./update-status-category.command"

@CommandHandler(UpdateStatusCategoryCommand)
export class UpdateStatusCategoryHandler implements ICommandHandler<UpdateStatusCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository

    async execute(command: UpdateStatusCategoryCommand): Promise<void> {
        const { id, status, restaurantId } = command
        const category = await this.categoryRepository.findById(id, restaurantId)

        if (!category) throw new NotFoundException()

        await this.categoryRepository.updateStatus(id, status, restaurantId)
    }
}