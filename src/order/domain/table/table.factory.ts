import { Table, TableImplement, TableProperties } from "./table";

type CreateTableOptions = Readonly<{
    number: number;
    barcode: string;
    restaurantId: number;
}>;

export class TableFactory {

    create(options: CreateTableOptions): Table {
        return new TableImplement({
            ...options,
            status: false,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            active: true
        })
    }

    reconstitute(properties: TableProperties): Table {
        return new TableImplement(properties)
    }
}