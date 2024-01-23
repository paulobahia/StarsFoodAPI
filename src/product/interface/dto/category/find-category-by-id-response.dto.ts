import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { FindCategoryByIdResult } from "src/product/application/query/category/find-category-by-id.result";

export class FindCategoryByIdResponseDTO extends FindCategoryByIdResult {
    @ApiProperty()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsDate()
    readonly createTime: Date;

    @ApiProperty()
    @IsDate()
    readonly updateTime: Date;

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