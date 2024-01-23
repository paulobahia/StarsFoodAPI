import { Injectable } from "@nestjs/common";
import { Order as PrismaOrder, Prisma, Status } from "prisma/generated/StarFood";
import { Order } from "src/order/domain/order/order";
import { OrderRepository } from "src/order/domain/order/order.repository";
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service";
import { OrderEntity } from "../entity/order.entity";
import { PrismaProductOrder } from "src/shared/types/prismaTypes";

@Injectable()
export class OrderRepositoryImplement implements OrderRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findById(id: number, restaurantId: number): Promise<Order | null> {
        const order = await this.prisma.order.findUnique({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            }
        })

        if (!order) {
            return null
        }

        return this.modelToEntity(order)
    }

    async findByOrderId(orderId: number, restaurantId: number): Promise<PrismaProductOrder | null> {
        const order = await this.prisma.order.findUnique({
            where: {
                Id: orderId,
                RestaurantId: restaurantId
            },
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

        if (!order) {
            return null
        }

        return order
    }

    async updateStatus(id: number, status: Status, restaurantId: number): Promise<void> {
        await this.prisma.order.update({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            },
            data: {
                Status: status
            }
        })
    }

    async create(data: Order): Promise<PrismaOrder> {
        const order = this.modelToEntity(data)

        return await this.prisma.order.create({
            data: {
                Restaurant: {
                    connect: {
                        Id: order.RestaurantId
                    }
                },
                Table: {
                    connect: {
                        Id: order.TableId
                    }
                },
                UserId: order.UserId,
            }
        })
    }

    private modelToEntity(model: Order): Prisma.OrderUncheckedCreateInput {
        const property = JSON.parse(JSON.stringify(model)) as OrderEntity;
        return {
            RestaurantId: property.restaurantId,
            TableId: property.tableId,
            UserId: property.tableId
        }
    }
}