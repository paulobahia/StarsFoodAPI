import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class UpdateStatusTableRequestDto {

    @ApiProperty()
    @IsBoolean()
    readonly status: boolean;
}