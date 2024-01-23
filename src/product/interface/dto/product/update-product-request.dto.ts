import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString, isArray } from "class-validator";

class UpdateVariationRequestDto {

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly value: string;

}

export class UpdateProductRequestDto {

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

    @ApiProperty({ type: [UpdateVariationRequestDto] })
    @IsArray()
    readonly variations: UpdateVariationRequestDto[];
}