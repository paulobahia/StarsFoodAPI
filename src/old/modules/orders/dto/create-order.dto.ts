import { ArrayMinSize, IsArray, IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateProductOrderDto } from 'src/modules/products-orders/dto/create-product-order.dto';

enum Status {
    WAITING = 'WAITING',
    IN_PRODUCTION = 'IN_PRODUCTION',
    DONE = 'DONE',
    COMPLETED = 'COMPLETED',
    PAID_OUT = 'PAID_OUT',
}

export class CreateOrderDto {

    @ApiProperty()
    @IsEnum(Status)
    status: Status;

    @ApiProperty()
    @IsNumber()
    table: number;

    @ApiProperty({ type: [CreateProductOrderDto] })
    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateProductOrderDto)
    variations: CreateProductOrderDto[];
}
