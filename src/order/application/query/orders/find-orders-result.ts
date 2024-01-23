import { IQueryResult } from "@nestjs/cqrs";

class OrderProducts {
    id: number;
    productId: number;
    productName: string;
    productImg: Array<string>;
    quantity: number;
    value: string;
}

class User {
    id: number;
    name: string;
    imgPath: string;
}

export class FindOrdersResult implements IQueryResult {
    constructor(readonly orders: Readonly<{
        id: number;
        status: string;
        paid: boolean;
        orderProducts: OrderProducts[]
        user: User;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        tableId: number;
        restaurantId: number;
        active: boolean;
    }>[],
    ) { }
}