import { Table } from "./table";
import { Table as TablePrisma } from "prisma/generated/StarFood"

export interface TableRepository {
    findById(id: number, restaurantId: number): Promise<TablePrisma | null>
    updateStatus(id: number, status: boolean, restaurantId: number): Promise<void>
    create(table: Table): Promise<void>
    delete(id: number, restaurantId: number): Promise<void>
}