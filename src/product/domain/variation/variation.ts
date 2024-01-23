import { AggregateRoot } from "@nestjs/cqrs";

export type VariationEssentialProperties = Readonly<
    Required<{
        name: string;
        value: string;
        productId: number,
        restaurantId: number;
    }>
>;

export type VariationOptionalProperties = Readonly<
    Partial<{
        status: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type VariationProperties = VariationEssentialProperties & Required<VariationOptionalProperties>;

export interface Variation {

}

export class VariationImplement extends AggregateRoot implements Variation {
    private readonly id: number
    private name: string
    private value: string;
    private readonly productId: number
    private readonly restaurantId: number
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;
    private status: boolean;
    private active: boolean;

    constructor(properties: VariationProperties) {
        super();
        Object.assign(this, properties);
    }
}