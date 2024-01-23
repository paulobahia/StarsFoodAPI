import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateTableRequestDto {

    @ApiProperty()
    @IsNumber()
    readonly number: number;
}