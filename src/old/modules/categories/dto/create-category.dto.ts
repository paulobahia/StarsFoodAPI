import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { MessagesHelper } from "../helpers/messages.helper";

export class CreateCategoryDto {

    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.CATEGORIES_REQUIRED })
    @IsString()
    name: string;
}
