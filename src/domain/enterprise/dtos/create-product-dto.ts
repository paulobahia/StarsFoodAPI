import { ApiProperty } from "@nestjs/swagger";
import { CreateVariationDto } from "./create-variation-dto";

export class CreateProductDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    imgUrl: Array<string>;

    @ApiProperty()
    categoryId: number;

    @ApiProperty({ type: [CreateVariationDto] })
    variations: CreateVariationDto[];
}