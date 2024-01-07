import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Param, Patch, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { z } from 'zod'
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { EditStatusProductUseCase } from "@/domain/application/use-cases/edit-status-product";

const editStatusProductBodySchema = z.object({
    status: z.boolean(),
})

export const EditProductValidationPipe = new ZodValidationPipe(editStatusProductBodySchema)

type EditStatusProductBodySchema = z.infer<typeof editStatusProductBodySchema>

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)

export class EditStatusProductController {
    constructor(private editStatusProduct: EditStatusProductUseCase) { }

    @HttpCode(200)
    @Patch(':id')
    async handle(@Param('id') productId: string, @Body(EditProductValidationPipe) body: EditStatusProductBodySchema, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const { status } = body
        const parseIntCategoryId = parseInt(productId, 10)

        const result = await this.editStatusProduct.execute({
            status,
            productId: parseIntCategoryId,
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