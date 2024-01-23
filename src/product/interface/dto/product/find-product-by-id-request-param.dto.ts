import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class FindProductByIdRequestParam {
    
    @ApiProperty()
    @IsString()
    readonly id: string;
}