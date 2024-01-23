import { ApiProperty } from "@nestjs/swagger";
import { FindTablesResult } from "src/order/application/query/tables/find-tables-result";

export class FindTablesResponseDto extends FindTablesResult {

    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly status: boolean;

    @ApiProperty()
    readonly number: number;

    @ApiProperty()
    readonly barcode: string;

    @ApiProperty()
    readonly createdAt: Date;

    @ApiProperty()
    readonly updatedAt: Date;

    @ApiProperty()
    readonly deletedAt: Date | null;

    @ApiProperty()
    readonly restaurantId: number;

    @ApiProperty()
    readonly active: boolean;
}