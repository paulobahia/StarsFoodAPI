import { AggregateRoot } from "@nestjs/cqrs";

export type RestaurantEssentialProperties = Readonly<
    Required<{
        name: string;
        restaurantId: number;
    }>
>;

export type RestaurantOptionalProperties = Readonly<
    Partial<{
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type RestaurantProperties = RestaurantEssentialProperties & Required<RestaurantOptionalProperties>;

export interface Restaurant {
}

export class RestaurantImplement extends AggregateRoot implements Restaurant {
    private readonly name: string
    private readonly restaurantId: number
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;
    private active: boolean;

    constructor(properties: RestaurantProperties) {
        super();
        Object.assign(this, properties);
    }
}