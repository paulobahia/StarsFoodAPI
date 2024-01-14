import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class UpdateStatusCategoryRequestDto {

    @ApiProperty()
    @IsBoolean()
    readonly status: boolean;
}