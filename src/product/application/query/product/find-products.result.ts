import { IQueryResult } from '@nestjs/cqrs';
import { JsonValue } from 'prisma/generated/StarFood/runtime/library';

class Variation {
    id: number;
    name: string;
    value: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    productId: number;
    restaurantId: number;
    active: boolean;
}

class Category {
    id: number;
    name: string;
}

export class FindProductsResult implements IQueryResult {
    constructor(readonly products: Readonly<{
        id: number;
        name: string;
        description: string;
        imgUrl: JsonValue;
        variations: Variation[]
        restaurantId: number;
        category: Category;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: boolean;
        active: boolean;
    }>[],
    ) { }
}