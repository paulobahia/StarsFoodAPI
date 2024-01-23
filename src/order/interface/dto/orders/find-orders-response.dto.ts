import { ApiProperty } from "@nestjs/swagger";
import { FindOrdersResult } from "src/order/application/query/orders/find-orders-result";

class OrderProduct {

    @ApiProperty()
    readonly productId: number;

    @ApiProperty()
    readonly productName: string;

    @ApiProperty()
    readonly productImg: string;

    @ApiProperty()
    readonly quantity: number;

    @ApiProperty()
    readonly value: string;
}

export class FindOrdersResponseDto extends FindOrdersResult {

    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly status: string;

    @ApiProperty()
    readonly paid: boolean;

    @ApiProperty({ type: [OrderProduct] })
    orderProducts: OrderProduct[];

    @ApiProperty()
    readonly createdAt: Date;

    @ApiProperty()
    readonly updatedAt: Date;

    @ApiProperty()
    readonly deletedAt: Date | null;

    @ApiProperty()
    readonly restaurantId: number;

    @ApiProperty()
    readonly tableId: number;

    @ApiProperty()
    readonly userId: number;

    @ApiProperty()
    readonly active: boolean;
}