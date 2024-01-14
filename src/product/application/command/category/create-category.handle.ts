import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateCategoryCommand } from "./create-category.command";
import { Inject } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { CategoryRepository } from "src/product/domain/category.repository";
import { CategoryFactory } from "src/product/domain/category.factory";

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler implements ICommandHandler<CreateCategoryCommand, void> {

    @Inject(InjectionToken.CATEGORY_REPOSITORY)
    private readonly categoryRepository: CategoryRepository
    @Inject() private readonly categoryFactory: CategoryFactory

    async execute(command: CreateCategoryCommand): Promise<void> {
        const category = this.categoryFactory.create(command)
        await this.categoryRepository.create(category)
    }
}