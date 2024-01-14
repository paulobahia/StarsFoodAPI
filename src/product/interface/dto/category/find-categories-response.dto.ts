import { ApiProperty } from "@nestjs/swagger";
import { FindCategoriesResult } from "src/product/application/query/category/find-categories.result";

class Category {

    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly createdTime: Date;

    @ApiProperty()
    readonly updateTime: Date;

    @ApiProperty()
    readonly restaurantId: number;

    @ApiProperty()
    readonly status: boolean;

    @ApiProperty()
    readonly active: boolean;
}

export class FindCategoriesResponseDto extends FindCategoriesResult {
    @ApiProperty({ type: [Category] })
    readonly categories: Category[]
}