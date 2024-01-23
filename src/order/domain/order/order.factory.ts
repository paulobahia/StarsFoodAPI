import { Prisma } from "prisma/generated/StarFood";
import { Order, OrderImplement, OrderProperties } from "./order";

type CreateOrderOptions = Readonly<{
    tableId: number,
    userId: number,
    restaurantId: number,
}>;

type CreateTableWebsocketOptions = Readonly<{
    id: number;
    number: number;
}>;

type CreateUserWebsocketOptions = Readonly<{
    id: number;
    name: string;
    imgPath: string;
}>;

type CreateProductsOrderWebsocketOptions = Readonly<{
    id: number;
    name: string;
    imgPath: Prisma.JsonValue;
    quantity: number;
    value: string;
}>;

export type CreateOrderWebsocketOptions = Readonly<{
    id: number;
    status: string;
    table: CreateTableWebsocketOptions;
    user: CreateUserWebsocketOptions;
    createAt: Date;
    productsOrder: CreateProductsOrderWebsocketOptions[]
}>;

export class OrderFactory {

    create(options: CreateOrderOptions): Order {
        return new OrderImplement({
            ...options,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            active: true
        })
    }

    reconstitute(properties: OrderProperties): Order {
        return new OrderImplement(properties)
    }
}