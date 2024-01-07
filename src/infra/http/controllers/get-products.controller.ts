import { BadRequestException, Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RestaurantIdValidationPipe } from "src/core/types/restaurantId";
import { JwtAuthGuard } from "src/infra/auth/jwt.guard";
import { RestaurantId } from "@/infra/auth/request-context-decorator";
import { GetProductsUseCase } from "@/domain/application/use-cases/get-products";
import { ProductPresenter } from "../presenters/product-presenter";

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)

export class GetProductsController {
    constructor(private getProducts: GetProductsUseCase) { }

    @Get()
    async handle(@RestaurantId(RestaurantIdValidationPipe) restaurantId: number) {
        const result = await this.getProducts.execute({ restaurantId })

        if (result.isLeft()) {
            throw new BadRequestException()
        }

        const products = result.value.products

        return products.map(ProductPresenter.toHTTP)
    }

}