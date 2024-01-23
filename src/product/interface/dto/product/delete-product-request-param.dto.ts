import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteProductRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}