import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Param, Patch, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { z } from 'zod'
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { EditStatusCategoryUseCase } from "@/domain/application/use-cases/edit-status-category";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";

const editStatusCategoryBodySchema = z.object({
    status: z.boolean(),
})

export const EditCategoryValidationPipe = new ZodValidationPipe(editStatusCategoryBodySchema)

type EditStatusCategoryBodySchema = z.infer<typeof editStatusCategoryBodySchema>

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)

export class EditStatusCategoryController {
    constructor(private editStatusCategory: EditStatusCategoryUseCase) { }

    @HttpCode(200)
    @Patch(':id')
    async handle(@Param('id') categoryId: string, @Body(EditCategoryValidationPipe) body: EditStatusCategoryBodySchema, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const { status } = body
        const parseIntCategoryId = parseInt(categoryId, 10)

        const result = await this.editStatusCategory.execute({
            status,
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