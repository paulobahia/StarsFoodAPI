export class VariationEntity {
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