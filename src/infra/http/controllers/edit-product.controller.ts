import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Param, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { z } from 'zod'
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { EditProductUseCase } from "@/domain/application/use-cases/edit-product";
import { EditVariationUseCase } from "@/domain/application/use-cases/edit-variation";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";

const EditVariationsBodySchema = z.object({
    id: z.number(),
    name: z.string(),
    value: z.string()
})

const editProductBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    imgUrl: z.array(z.string()),
    categoryId: z.number(),
    variations: z.array(EditVariationsBodySchema),
})

export const EditProductValidationPipe = new ZodValidationPipe(editProductBodySchema)

type EditProductBodySchema = z.infer<typeof editProductBodySchema>

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)

export class EditProductController {
    constructor(private editProduct: EditProductUseCase, private editVariation: EditVariationUseCase) { }

    @HttpCode(204)
    @Put(':id')
    async handle(@Param('id') productId: string, @Body(EditProductValidationPipe) body: EditProductBodySchema, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const { name, description, imgUrl, variations, categoryId } = body
        const parseIntProductId = parseInt(productId, 10)

        const variationResult = await this.editVariation.execute(variations.map((variation) => {
            return {
                variation: {
                    variationId: variation.id,
                    name: variation.name,
                    value: variation.value,
                    restaurantId,
                },
                productId: parseIntProductId,
            }
        }))

        if (variationResult.isLeft()) {
            const error = variationResult.value

            switch (error.constructor) {
                case ResourceNotFoundError:
                    throw new NotFoundException(error.message)
                default:
                    throw new BadRequestException(error.message)
            }
        }

        const productResult = await this.editProduct.execute({
            name,
            description,
            imgUrl,
            productId: parseIntProductId,
            categoryId,
            restaurantId
        })

        if (productResult.isLeft()) {
            const error = productResult.value

            switch (error.constructor) {
                case ResourceNotFoundError:
                    throw new NotFoundException(error.message)
                default:
                    throw new BadRequestException(error.message)
            }
        }

    }
}