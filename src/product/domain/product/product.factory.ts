import { Product, ProductImplement, ProductProperties } from "./product";

type CreateProductOptions = Readonly<{
    name: string;
    description: string;
    imgUrl: Array<string>,
    categoryId: number,
    restaurantId: number;
}>;

export class ProductFactory {

    create(options: CreateProductOptions): Product {
        return new ProductImplement({
            ...options,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            status: false,
            active: true
        })
    }

    reconstitute(properties: ProductProperties): Product {
        return new ProductImplement(properties)
    }
}