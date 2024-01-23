import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateStatusOrderRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}