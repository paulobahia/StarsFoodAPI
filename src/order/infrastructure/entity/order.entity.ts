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

export class OrderEntity {
    id: number;
    status: string;
    paid: boolean;
    orderProducts: OrderProducts[]
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    user: User;
    tableId: number;
    restaurantId: number;
    active: boolean;
}