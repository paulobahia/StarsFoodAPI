import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { MessagesHelper } from '../helpers/messages.helper';

export class UpdateVariationDto {

    @IsOptional()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.NAME_VARIATION_REQUIRED })
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.VALUE_VARIATION_REQUIRED })
    @IsNotEmpty()
    value: string;
}
