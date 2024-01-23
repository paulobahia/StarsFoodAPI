import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber } from "class-validator";

class Variations {

    @ApiProperty()
    @IsNumber()
    readonly quantity: number;

    @ApiProperty()
    @IsNumber()
    readonly variationId: number;
}

export class CreateOrderRequestDto {

    @ApiProperty()
    @IsNumber()
    readonly tableId: number;

    @ApiProperty({ type: [Variations] })
    @IsArray()
    readonly variations: Variations[];
}