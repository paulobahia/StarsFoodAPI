import { Injectable } from "@nestjs/common";
import { FindTablesResult } from "src/order/application/query/tables/find-tables-result";
import { TableQuery } from "src/order/application/query/tables/table.query";
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service";
import { TableMapper } from "../mappers/table.mapper";
import { FindTableByIdResult } from "src/order/application/query/tables/find-table-by-id.result";

@Injectable()
export class TableQueryImplement implements TableQuery {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async find(restaurantId: number): Promise<FindTablesResult> {
        const tables = await this.prisma.table.findMany({
            where: {
                RestaurantId: restaurantId,
                Active: true
            }
        })

        return { tables: tables.map(TableMapper.toDomain) }
    }

    async findById(id: number, restaurantId: number): Promise<FindTableByIdResult | null> {
        const table = await this.prisma.table.findUnique({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            }
        })

        if (!table) {
            return null
        }

        return TableMapper.toDomain(table)
    }
}