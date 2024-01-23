import { ProductOrder, ProductOrderImplement, ProductOrderProperties } from "./product-order";

type CreateProductOrderOptions = Readonly<{
    quantity: number,
    orderId: number,
    variationId: number,
}>;

export class ProductOrderFactory {

    create(options: CreateProductOrderOptions): ProductOrder {
        return new ProductOrderImplement({
            ...options,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        })
    }

    reconstitute(properties: ProductOrderProperties): ProductOrder {
        return new ProductOrderImplement(properties)
    }
}