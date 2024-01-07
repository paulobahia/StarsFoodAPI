import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { BadRequestException, Body, Controller, HttpCode, NotFoundException, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { z } from 'zod'
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { RegisterCategoryUseCase } from "@/domain/application/use-cases/register-category";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { CreateCategoryDto } from "@/domain/enterprise/dtos/create-category-dto";

const createCategoryBodySchema = z.object({
    name: z.string()
})

export const CategoryValidationPipe = new ZodValidationPipe(createCategoryBodySchema)

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)

export class CreateCategoryController {
    constructor(private registerCategory: RegisterCategoryUseCase) { }

    @Post()
    @HttpCode(201)
    async handle(@Body(CategoryValidationPipe) body: CreateCategoryDto, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const { name } = body

        const result = await this.registerCategory.execute({
            name,
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