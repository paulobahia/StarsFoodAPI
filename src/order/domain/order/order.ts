import { AggregateRoot } from "@nestjs/cqrs";

export type OrderEssentialProperties = Readonly<
    Required<{
        tableId: number,
        userId: number,
        restaurantId: number,
    }>
>;

export type OrderOptionalProperties = Readonly<
    Partial<{
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type OrderProperties = OrderEssentialProperties & Required<OrderOptionalProperties>;

export interface Order {
}

export class OrderImplement extends AggregateRoot implements Order {
    private readonly tableId: number
    private readonly userId: number
    private readonly restaurantId: number
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;
    private active: boolean;

    constructor(properties: OrderProperties) {
        super();
        Object.assign(this, properties);
    }
}