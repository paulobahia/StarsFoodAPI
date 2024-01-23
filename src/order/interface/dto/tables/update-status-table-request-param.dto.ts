import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateStatusTableRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}