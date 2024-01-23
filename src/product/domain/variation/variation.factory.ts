import { Variation, VariationImplement, VariationProperties } from "./variation";

type CreateVariationOptions = Readonly<{
    id?: number;
    name: string;
    value: string;
    productId: number,
    restaurantId: number;
}>;

export class VariationFactory {

    create(options: CreateVariationOptions): Variation {
        return new VariationImplement({
            ...options,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            status: false,
            active: true
        })
    }

    reconstitute(properties: VariationProperties): Variation {
        return new VariationImplement(properties)
    }
}