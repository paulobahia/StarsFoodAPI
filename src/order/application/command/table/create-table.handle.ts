import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Inject, NotFoundException } from "@nestjs/common";
import { CreateTableCommand } from "./create-table.command";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantRepository } from "src/restaurant/domain/restaurant.repository";
import { InjectionToken } from "../../injection-token";
import { TableRepository } from "src/order/domain/table/table.repository";
import { TableFactory } from "src/order/domain/table/table.factory";
import { BarcodeGenerator, BARCODE_GENERATOR } from "src/shared/barcode/hash-barcode.module";

@CommandHandler(CreateTableCommand)
export class CreateTableHandler implements ICommandHandler<CreateTableCommand, void> {

    @Inject(InjectionToken.TABLE_REPOSITORY)
    private readonly tableRepository: TableRepository
    @Inject() private readonly tableFactory: TableFactory
    @Inject(BARCODE_GENERATOR)
    private readonly barcodeGenerator: BarcodeGenerator;
    @Inject(InjectionRestaurantToken.RESTAURANT_REPOSITORY)
    private readonly restauranRepository: RestaurantRepository

    async execute(command: CreateTableCommand): Promise<void> {
        const { number, restaurantId } = command
        const restaurant = await this.restauranRepository.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const table = this.tableFactory.create({
            number,
            restaurantId,
            barcode: this.barcodeGenerator.generateBarcode(restaurantId, number)
        })

        await this.tableRepository.create(table)
    }
}