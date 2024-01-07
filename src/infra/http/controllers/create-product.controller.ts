import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { z } from 'zod'
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { CreateProductDto } from "@/domain/enterprise/dtos/create-product-dto";
import { RegisterProductUseCase } from "@/domain/application/use-cases/register-product";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";

const createVariationsBodySchema = z.object({
    name: z.string(),
    value: z.string()
})

const createProductBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    imgUrl: z.array(z.string()),
    categoryId: z.number(),
    variations: z.array(createVariationsBodySchema),
})

export const ProductValidationPipe = new ZodValidationPipe(createProductBodySchema)

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)

export class CreateProductController {
    constructor(private registerProduct: RegisterProductUseCase) { }

    @Post()
    @HttpCode(201)
    async handle(@Body(ProductValidationPipe) body: CreateProductDto, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const { name, description, imgUrl, variations, categoryId } = body

        const result = await this.registerProduct.execute({ name, description, imgUrl, variations, categoryId, restaurantId })

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