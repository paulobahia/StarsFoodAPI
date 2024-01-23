import { JsonValue } from "prisma/generated/StarFood/runtime/library";

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

export class ProductEntity {
    id: number;
    name: string;
    description: string;
    imgUrl: JsonValue;
    variations: Variation[]
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    restaurantId: number;
    category: Category;
    status: boolean;
    active: boolean;
}