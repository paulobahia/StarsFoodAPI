import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { FindProductsResult } from "src/product/application/query/product/find-products.result";

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

class Category {

    @ApiProperty()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

}

export class FindProductsResponseDto extends FindProductsResult {

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

    @ApiProperty({ type: [Category] })
    readonly category: Category;

    @ApiProperty()
    @IsBoolean()
    readonly status: boolean;

    @ApiProperty()
    @IsBoolean()
    readonly active: boolean;
}