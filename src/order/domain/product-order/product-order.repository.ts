import { ProductOrder } from "./product-order";

export interface ProductOrderRepository {
    create(productOrder: ProductOrder[]): Promise<void>
}