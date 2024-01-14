import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateStatusCategoryRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}