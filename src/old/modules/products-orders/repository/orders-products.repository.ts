import { BadRequestException, Injectable } from "@nestjs/common";
import { StarFoodPrismaService } from "src/modules/prisma/services/star-food.prisma.service";
import { CreateProductOrderDto } from "../dto/create-product-order.dto";

@Injectable()
export class ProductsOrdersRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async create(OrderId: number, newsOrdersProducts: CreateProductOrderDto[]) {
        try {
            return await this.prisma.productOrder.createMany({
                data: newsOrdersProducts.map((newOrderProducts) => ({
                    Quantity: newOrderProducts.quantity,
                    OrderId: OrderId,
                    VariationId: newOrderProducts.variationId,
                })),
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}