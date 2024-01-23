export class TableEntity {
    id: number;
    number: number;
    status: boolean;
    barcode: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    restaurantId: number;
    active: boolean;
}