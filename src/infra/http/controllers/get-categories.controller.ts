import { BadRequestException, Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RestaurantIdValidationPipe } from "src/core/types/restaurantId";
import { GetCategoriesUseCase } from "src/domain/application/use-cases/get-categories";
import { JwtAuthGuard } from "src/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { CategoryPresenter } from "../presenters/category-presenter";

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)

export class GetCategoriesController {
    constructor(private getCategories: GetCategoriesUseCase) { }

    @Get()
    async handle(@RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const result = await this.getCategories.execute({ restaurantId })

        if (result.isLeft()) {
            throw new BadRequestException()
        }

        const categories = result.value.categories

        return categories.map(CategoryPresenter.toHTTP) 
    }

}