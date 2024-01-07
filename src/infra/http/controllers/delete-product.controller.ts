import { ResourceInUseError } from "@/core/errors/errors/resource-in-use-error";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { RestaurantIdValidationPipe } from "@/core/types/restaurantId";
import { DeleteProductUseCase } from "@/domain/application/use-cases/delete-product";
import { JwtAuthGuard } from "@/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { BadRequestException, Controller, Delete, HttpCode, NotFoundException, Param, UseGuards, ConflictException } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)

export class DeleteProductController {
    constructor(private deleteProduct: DeleteProductUseCase) { }

    @HttpCode(200)
    @Delete(':id')
    async handle(@Param('id') productId: string, @RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const parseIntProductId = parseInt(productId, 10)

        const result = await this.deleteProduct.execute({
            productId: parseIntProductId,
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