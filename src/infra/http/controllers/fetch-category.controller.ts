import { BadRequestException, Controller, Get, NotFoundException, Param, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RestaurantIdValidationPipe } from "src/core/types/restaurantId";
import { JwtAuthGuard } from "src/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { FetchCategoriesUseCase } from "@/domain/application/use-cases/fetch-category";
import { CategoryPresenter } from "../presenters/category-presenter";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)

export class FetchCategoriesController {
    constructor(private fetchCategories: FetchCategoriesUseCase) { }

    @Get(':id')
    async handle(@RestaurantId(RestaurantIdValidationPipe) restaurantId: number, @Param('id') categoryId: string,) {
        const parseIntCategoryId = parseInt(categoryId, 10)
        const result = await this.fetchCategories.execute({ restaurantId, categoryId: parseIntCategoryId })

        if (result.isLeft()) {
            const error = result.value

            switch (error.constructor) {
                case ResourceNotFoundError:
                    throw new NotFoundException(error.message)
                default:
                    throw new BadRequestException(error.message)
            }
        }

        const category = result.value.category

        return CategoryPresenter.toHTTP(category)
    }

}