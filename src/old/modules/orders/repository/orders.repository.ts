import { BadRequestException, Injectable } from "@nestjs/common";
import { StarFoodPrismaService } from "src/modules/prisma/services/star-food.prisma.service";
import { OrdersEntity } from "../entities/orders.entity";
import { CreateOrderDto } from "../dto/create-order.dto";
import { HandleStatusOrderDto } from "../dto/handle-status-order.dto";
import { OrderDto } from "../dto/order.dto";

@Injectable()
export class OrdersRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findUnique(RestaurantId: string, OrdersId: string): Promise<OrdersEntity | null> {
        try {
            return await this.prisma.order.findUnique({
                where: { RestaurantId: parseInt(RestaurantId, 10), Id: parseInt(OrdersId, 10), Active: true }
            }) as OrdersEntity | null
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findAll(RestaurantId: string) {
        try {
            return await this.prisma.order.findMany({
                where: { RestaurantId: parseInt(RestaurantId, 10), Active: true },
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
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async create(RestaurantId: string, InstanceId: string, newOrder: CreateOrderDto) {
        const { status, table } = newOrder
        try {
            return await this.prisma.order.create({
                data: {
                    Status: status,
                    UserId: parseInt(InstanceId, 10),
                    Table: {
                        connect: { Id: table }
                    },
                    Restaurant: {
                        connect: { Id: parseInt(RestaurantId, 10) }
                    }
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async handleStatus(RestaurantId: string, OrdersId: string, data: HandleStatusOrderDto) {
        try {
            const { status } = data
            return await this.prisma.order.update({
                where: { Id: parseInt(OrdersId, 10), RestaurantId: parseInt(RestaurantId, 10) },
                data: {
                    Status: status
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findOrdersProductsByOrderId(RestaurantId: string, OrderId: number) {
        try {
            const OrdersProductsByOrderId = await this.prisma.order.findUnique({
                where: { Id: OrderId, RestaurantId: parseInt(RestaurantId, 10) },
                include: {
                    OrderProducts: {
                        include: {
                            Variation: {
                                include: { Products: true }
                            }
                        }
                    }
                }
            })

            return OrdersProductsByOrderId?.OrderProducts
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}