import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Param, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { z } from 'zod'
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { EditCategoryUseCase } from "@/domain/application/use-cases/edit-category";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";

const editCategoryBodySchema = z.object({
    name: z.string(),
})

export const EditCategoryValidationPipe = new ZodValidationPipe(editCategoryBodySchema)

type EditCategoryBodySchema = z.infer<typeof editCategoryBodySchema>

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)

export class EditCategoryController {
    constructor(private editCategory: EditCategoryUseCase) { }

    @HttpCode(204)
    @Put(':id')
    async handle(@Param('id') categoryId: string, @Body(EditCategoryValidationPipe) body: EditCategoryBodySchema, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const { name } = body
        const parseIntCategoryId = parseInt(categoryId, 10)

        const result = await this.editCategory.execute({
            name,
            categoryId: parseIntCategoryId,
            restaurantId
        })

        if (result.isLeft()) {
            const error = result.value
            
            switch (error.constructor) {
                case ResourceNotFoundError:
                    throw new NotFoundException(error.message)
                default:
                    throw new BadRequestException(error.message)
            }
        }
    }
}