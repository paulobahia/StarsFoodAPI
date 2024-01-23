import { ApiProperty } from "@nestjs/swagger";
import { FindTableByIdResult } from "src/order/application/query/tables/find-table-by-id.result";

export class FindTableByIdResponseDTO extends FindTableByIdResult {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly number: number;

    @ApiProperty()
    readonly status: boolean;

    @ApiProperty()
    readonly barcode: string;

    @ApiProperty()
    readonly restaurantId: number;

    @ApiProperty()
    readonly createAt: Date;

    @ApiProperty()
    readonly updateAt: Date;
    
    @ApiProperty()
    readonly deletedAt: Date;

    @ApiProperty()
    readonly active: boolean;
}