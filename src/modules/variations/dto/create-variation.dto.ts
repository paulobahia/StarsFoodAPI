import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { MessagesHelper } from "../helpers/messages.helper";

export class CreateVariationDto {

    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.NAME_VARIATION_REQUIRED })
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.VALUE_VARIATION_REQUIRED })
    @IsNotEmpty()
    value: string;
}
