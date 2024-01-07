import { BadRequestException, Controller, Get, NotFoundException, Param, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RestaurantIdValidationPipe } from "src/core/types/restaurantId";
import { JwtAuthGuard } from "src/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { ResourceNotFoundError } from "@/core/errors/errors/resource-not-found-error";
import { FetchProductsUseCase } from "@/domain/application/use-cases/fetch-product";
import { ProductPresenter } from "../presenters/product-presenter";

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)

export class FetchProductsController {
    constructor(private fetchProducts: FetchProductsUseCase) { }

    @Get(':id')
    async handle(@RestaurantId(RestaurantIdValidationPipe) restaurantId: number, @Param('id') ProductId: string,) {
        const parseIntProductId = parseInt(ProductId, 10)
        const result = await this.fetchProducts.execute({ restaurantId, productId: parseIntProductId })

        if (result.isLeft()) {
            const error = result.value

            switch (error.constructor) {
                case ResourceNotFoundError:
                    throw new NotFoundException(error.message)
                default:
                    throw new BadRequestException(error.message)
            }
        }

        const product = result.value.product

        return ProductPresenter.toHTTP(product)
    }

}