import { ApiProperty } from "@nestjs/swagger";

export class CreateVariationDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    value: string;
}