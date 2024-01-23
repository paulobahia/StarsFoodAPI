import { Injectable } from "@nestjs/common";
import { FindOrdersResult } from "src/order/application/query/orders/find-orders-result";
import { OrderQuery } from "src/order/application/query/orders/order.query";
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service";
import { OrderMapper } from "../mappers/order.mapper";

@Injectable()
export class OrderQueryImplement implements OrderQuery {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async find(restaurantId: number): Promise<FindOrdersResult> {
        const orders = await this.prisma.order.findMany({
            where: {
                RestaurantId: restaurantId,
                Active: true,
            },
            include: {
                Table: true,
                Restaurant: true,
                OrderProducts: {
                    include: {
                        Variation: { include: { Products: true } }
                    }
                }
            }
        })

        return { orders: orders.map(OrderMapper.toDomain) }
    }
}