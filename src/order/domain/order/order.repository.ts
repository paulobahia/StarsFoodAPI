import { Order } from "./order";
import { Order as PrismaOrder } from "prisma/generated/StarFood";
import { PrismaProductOrder } from "src/shared/types/prismaTypes";

export interface OrderRepository {
    findById(id: number, restaurantId: number): Promise<Order | null>
    findByOrderId(orderId: number, restaurantId: number): Promise<PrismaProductOrder | null>
    create(order: Order): Promise<PrismaOrder>
    updateStatus(id: number, status: string, restaurantId: number): Promise<void>
}