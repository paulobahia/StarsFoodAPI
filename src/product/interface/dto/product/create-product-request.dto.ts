import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";

class CreateVariationRequestDto {

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly value: string;

}

export class CreateProductRequestDto {

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsArray()
    readonly imgUrl: Array<string>;

    @ApiProperty()
    @IsNumber()
    readonly categoryId: number;

    @ApiProperty({ type: [CreateVariationRequestDto] })
    readonly variations: CreateVariationRequestDto[];
}