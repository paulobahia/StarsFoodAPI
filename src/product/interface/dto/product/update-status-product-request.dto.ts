import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class UpdateStatusProductRequestDto {

    @ApiProperty()
    @IsBoolean()
    readonly status: boolean;
}