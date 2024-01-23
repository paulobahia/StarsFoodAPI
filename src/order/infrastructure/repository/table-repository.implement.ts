import { Inject, Injectable } from "@nestjs/common";
import { Prisma, Table as TablePrisma } from "prisma/generated/StarFood";
import { Table } from "src/order/domain/table/table";
import { TableRepository } from "src/order/domain/table/table.repository";
import { TableEntity } from "../entity/table.entity";
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service";
import { TableFactory } from "src/order/domain/table/table.factory";

@Injectable()
export class TableRepositoryImplement implements TableRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }
    @Inject() private readonly tableFactory: TableFactory

    async findById(id: number, restaurantId: number): Promise<TablePrisma | null> {

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

        return table
    }

    async updateStatus(id: number, status: boolean, restaurantId: number): Promise<void> {

        await this.prisma.table.update({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            },
            data: {
                Status: status
            }
        })
    }

    async create(data: Table): Promise<void> {
        const table = this.modelToEntity(data)

        await this.prisma.table.create({
            data: {
                Restaurant: {
                    connect: {
                        Id: table.RestaurantId
                    }
                },
                Number: table.Number,
                Barcode: table.Barcode
            }
        })
    }

    async delete(id: number, restaurantId: number): Promise<void> {
        await this.prisma.table.update({
            where: {
                Id: id,
                RestaurantId: restaurantId
            },
            data: {
                Active: false
            }
        })
    }

    private modelToEntity(model: Table): Prisma.TableUncheckedCreateInput {
        const property = JSON.parse(JSON.stringify(model)) as TableEntity;
        return {
            Number: property.number,
            Barcode: property.barcode,
            RestaurantId: property.restaurantId
        }
    }

    private entityToModel(entity: TablePrisma): Table {
        return this.tableFactory.reconstitute({
            number: entity.Number,
            barcode: entity.Barcode,
            status: entity.Status,
            restaurantId: entity.RestaurantId,
            active: entity.Active,
            createdAt: entity.CreatedAt,
            updatedAt: entity.UpdatedAt,
            deletedAt: entity.DeletedAt
        });
    }
}