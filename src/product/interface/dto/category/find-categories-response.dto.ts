import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";
import { FindCategoriesResult } from "src/product/application/query/category/find-categories.result";

class Category {

    @ApiProperty()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsDate()
    readonly createdAt: Date;

    @ApiProperty()
    @IsDate()
    readonly updatedAt: Date;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    readonly deletedAt: Date | null;

    @ApiProperty()
    @IsNumber()
    readonly restaurantId: number;

    @ApiProperty()
    @IsBoolean()
    readonly status: boolean;

    @ApiProperty()
    @IsBoolean()
    readonly active: boolean;
}

export class FindCategoriesResponseDto extends FindCategoriesResult {
    @ApiProperty({ type: [Category] })
    readonly categories: Category[]
}