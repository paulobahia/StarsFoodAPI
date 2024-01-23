import { AggregateRoot } from "@nestjs/cqrs";

export type TableEssentialProperties = Readonly<
    Required<{
        number: number;
        restaurantId: number;
        barcode: string;
    }>
>;

export type TableOptionalProperties = Readonly<
    Partial<{
        status: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type TableProperties = TableEssentialProperties & Required<TableOptionalProperties>;

export interface Table {
}

export class TableImplement extends AggregateRoot implements Table {
    private readonly number: number
    private readonly barcode: string
    private readonly restaurantId: number
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;
    private status: boolean;
    private active: boolean;

    constructor(properties: TableProperties) {
        super();
        Object.assign(this, properties);
    }
}