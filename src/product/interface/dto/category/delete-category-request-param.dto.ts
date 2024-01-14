import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteCategoryRequestParam {

    @ApiProperty()
    @IsString()
    readonly id: string;
}