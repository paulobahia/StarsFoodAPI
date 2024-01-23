import { AggregateRoot } from "@nestjs/cqrs";
import { JsonValue } from "prisma/generated/StarFood/runtime/library";

export type ProductEssentialProperties = Readonly<
    Required<{
        name: string;
        description: string;
        imgUrl: JsonValue,
        categoryId: number,
        restaurantId: number;
    }>
>;

export type ProductOptionalProperties = Readonly<
    Partial<{
        status: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type ProductProperties = ProductEssentialProperties & Required<ProductOptionalProperties>;

export interface Product {
}

export class ProductImplement extends AggregateRoot implements Product {
    private name: string
    private description: string;
    private imgUrl: Array<string>;
    private categoryId: number;
    private readonly restaurantId: number
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;
    private status: boolean;
    private active: boolean;

    constructor(properties: ProductProperties) {
        super();
        Object.assign(this, properties);
    }
}