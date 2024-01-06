import { ResourceInUseError } from "@/core/errors/errors/resource-in-use-error";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { DeleteCategoryUseCase } from "@/domain/application/use-cases/delete-category";
import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { BadRequestException, Controller, Delete, HttpCode, NotFoundException, Param, UseGuards, ConflictException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)

export class DeleteCategoryController {
    constructor(private deleteCategory: DeleteCategoryUseCase) { }

    @HttpCode(200)
    @Delete(':id')
    async handle(@Param('id') categoryId: string, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const parseIntCategoryId = parseInt(categoryId, 10)

        const result = await this.deleteCategory.execute({
            categoryId: parseIntCategoryId,
            restaurantId
        })

        if (result.isLeft()) {
            const error = result.value

            switch (error.constructor) {
                case ResourceNotFoundError:
                    throw new NotFoundException(error.message)
                case ResourceInUseError:
                    throw new ConflictException(error.message)
                default:
                    throw new BadRequestException(error.message)
            }
        }
    }
}