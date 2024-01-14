import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateCategoryRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}