import { ApiProperty } from "@nestjs/swagger";
import { FindCategoryByIdResult } from "src/product/application/query/category/find-category-by-id.result";

export class FindCategoryByIdResponseDTO extends FindCategoryByIdResult {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly createTime: Date;

    @ApiProperty()
    readonly updateTime: Date;

    @ApiProperty()
    readonly restaurantId: number;

    @ApiProperty()
    readonly status: boolean;

    @ApiProperty()
    readonly active: boolean;
}