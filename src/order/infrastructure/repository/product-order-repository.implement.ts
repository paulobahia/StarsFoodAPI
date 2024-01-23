import { Injectable } from "@nestjs/common";
import { Prisma } from "prisma/generated/StarFood";
import { ProductOrder } from "src/order/domain/product-order/product-order";
import { ProductOrderRepository } from "src/order/domain/product-order/product-order.repository";
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service";
import { ProductOrderEntity } from "../entity/product-order-entity";

@Injectable()
export class ProductOrderRepositoryImplement implements ProductOrderRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async create(data: ProductOrder[]): Promise<void> {
        const productsOrder = data.map(this.modelToEntity)

        await this.prisma.productOrder.createMany({
            data: productsOrder.map((product) => ({
                Quantity: product.Quantity,
                OrderId: product.OrderId,
                VariationId: product.VariationId
            }))
        })
    }

    private modelToEntity(model: ProductOrder): Prisma.ProductOrderUncheckedCreateInput {
        const property = JSON.parse(JSON.stringify(model)) as ProductOrderEntity;

        return {
            Quantity: property.quantity,
            OrderId: property.orderId,
            VariationId: property.variationId
        }
    }
}