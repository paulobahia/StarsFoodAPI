import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateStatusProductRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}