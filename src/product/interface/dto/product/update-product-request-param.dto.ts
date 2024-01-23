import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateProductRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}