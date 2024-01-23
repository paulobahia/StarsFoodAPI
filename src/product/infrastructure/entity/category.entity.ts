export class CategoryEntity {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    restaurantId: number;
    status: boolean;
    active: boolean;
}