import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { MessagesHelper } from '../helpers/messages.helper';

export class HandleStatusCategoryDto {
    
    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.STATUS_CATEGORIES_REQUIRED })
    @IsBoolean()
    status: boolean;
}
