import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MessagesHelper } from '../helpers/messages.helper';

enum Status {
    WAITING = 'WAITING',
    IN_PRODUCTION = 'IN_PRODUCTION',
    DONE = 'DONE',
    COMPLETED = 'COMPLETED',
    PAID_OUT = 'PAID_OUT',
}

export class HandleStatusOrderDto {

    @ApiProperty()
    @IsNotEmpty({ message: MessagesHelper.STATUS_REQUIRED })
    @IsEnum(Status)
    status: Status;

}
