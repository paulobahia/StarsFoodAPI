import { IsBoolean, IsNotEmpty } from 'class-validator';
import { MessagesHelper } from '../helpers/messages.helper';
import { ApiProperty } from '@nestjs/swagger';

export class HandleStatusProductDto {

  @ApiProperty()
  @IsNotEmpty({ message: MessagesHelper.STATUS_REQUIRED })
  @IsBoolean()
  status: boolean
}
