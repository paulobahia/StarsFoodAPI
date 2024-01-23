import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";

enum Status {
    WAITING = 'WAITING',
    IN_PRODUCTION = 'IN_PRODUCTION',
    DONE = 'DONE',
    COMPLETED = 'COMPLETED',
    PAID_OUT = 'PAID_OUT',
}

export class UpdateStatusOrderRequestDto {

    @ApiProperty()
    @IsEnum(Status)
    status: Status;
}