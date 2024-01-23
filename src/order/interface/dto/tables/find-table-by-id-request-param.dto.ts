import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class FindTableByIdRequestParam {
    
    @ApiProperty()
    @IsString()
    readonly id: string;
}