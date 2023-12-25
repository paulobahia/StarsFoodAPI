import { BadRequestException, Injectable } from "@nestjs/common";
import { StarFoodPrismaService } from "src/modules/prisma/services/star-food.prisma.service";
import { TablesEntity } from "../entities/tables.entity";

@Injectable()
export class TablesProductsRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findUnique(RestaurantId: string, TableId: number): Promise<TablesEntity | null> {
        try {
            return await this.prisma.table.findUnique({
                where: { RestaurantId: parseInt(RestaurantId, 10), Id: TableId, Active: true }
            }) as TablesEntity | null
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async handleStatus(RestaurantId: string, TableId: number) {
        try {
            return await this.prisma.table.update({
                where: { Id: TableId, RestaurantId: parseInt(RestaurantId, 10) },
                data: {
                    Status: true
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}