import { Table, Prisma } from "prisma/generated/StarFood";
import { TableEntity } from "../entity/table.entity";

export class TableMapper {
    static toDomain(raw: Table): TableEntity {
        return {
            id: raw.Id,
            number: raw.Number,
            barcode: raw.Barcode,
            status: raw.Status,
            restaurantId: raw.RestaurantId,
            active: raw.Active,
            createdAt: raw.CreatedAt,
            updatedAt: raw.UpdatedAt,
            deletedAt: raw.DeletedAt
        }
    }

    static toPrisma(table: TableEntity): Prisma.TableUncheckedCreateInput {
        return {
            Number: table.number,
            Barcode: table.barcode,
            RestaurantId: table.restaurantId
        }
    }
}