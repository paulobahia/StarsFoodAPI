import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { FindProductByIdResult } from "src/product/application/query/product/find-product-by-id.result";

class Variation {

    @ApiProperty()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly value: string;

    @ApiProperty()
    @IsDate()
    readonly createdAt: Date;

    @ApiProperty()
    @IsDate()
    readonly updatedAt: Date;

    @ApiProperty()
    @IsOptional()
    @IsDate()
    readonly deletedAt: Date | null;

    @ApiProperty()
    @IsNumber()
    readonly restaurantId: number;

    @ApiProperty()
    @IsNumber()
    readonly productId: number;

    @ApiProperty()
    @IsBoolean()
    readonly active: boolean;
}

export class FindProductByIdResponseDTO extends FindProductByIdResult {

    @ApiProperty()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsArray()
    readonly imgUrl: Array<string>;

    @ApiProperty({ type: [Variation] })
    readonly variations: Variation[];

    @ApiProperty()
    @IsDate()
    readonly createdAt: Date;

    @ApiProperty()
    @IsDate()
    readonly updatedAt: Date;

    @ApiProperty()
    @IsOptional()
    @IsDate()
    readonly deletedAt: Date | null;

    @ApiProperty()
    @IsNumber()
    readonly restaurantId: number;

    @ApiProperty()
    @IsNumber()
    readonly categoryId: number;

    @ApiProperty()
    @IsBoolean()
    readonly status: boolean;

    @ApiProperty()
    @IsBoolean()
    readonly active: boolean;
}