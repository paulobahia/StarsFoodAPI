import { Type } from "class-transformer";
import { IsArray, IsDate, IsEnum, IsNumber, IsString, ValidateNested } from "class-validator";

export class OrderProductDTO {
    @IsNumber()
    productId: number;

    @IsString()
    productName: string;

    @IsArray()
    productImg: string;

    @IsNumber()
    quantity: number;

    @IsString()
    value: string;
}

export class OrderDto {
    @IsNumber()
    Id: number;

    @IsNumber()
    table: number;

    @IsString()
    status: string;

    @IsDate()
    createTime: Date;

    @IsNumber()
    userId: number

    @IsString()
    userName: string;

    @IsString()
    userImg: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderProductDTO)
    orderProducts: OrderProductDTO[];
}