import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { MessagesHelper } from '../helpers/messages.helper';

export class UpdateCategoryDto {
    
    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.CATEGORIES_REQUIRED })
    @IsString()
    name: string;
}
