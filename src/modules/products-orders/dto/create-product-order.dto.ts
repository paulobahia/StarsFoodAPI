import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateProductOrderDto {

    @ApiProperty()
    @IsNumber()
    quantity: number;

    @ApiProperty()
    @IsNumber()
    variationId: number;
}