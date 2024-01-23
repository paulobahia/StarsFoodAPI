import { AggregateRoot } from "@nestjs/cqrs";

export type ProductOrderEssentialProperties = Readonly<
    Required<{
        quantity: number,
        orderId: number,
        variationId: number,
    }>
>;

export type ProductOrderOptionalProperties = Readonly<
    Partial<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type ProductOrderProperties = ProductOrderEssentialProperties & Required<ProductOrderOptionalProperties>;

export interface ProductOrder {
}

export class ProductOrderImplement extends AggregateRoot implements ProductOrder {
    private quantity: number
    private orderId: number
    private variationId: number
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;

    constructor(properties: ProductOrderProperties) {
        super();
        Object.assign(this, properties);
    }
}