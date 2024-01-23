import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCategoryRequestDto {
    
    @ApiProperty()
    @IsString()
    readonly name: string;
}