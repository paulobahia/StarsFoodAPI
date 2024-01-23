import { Prisma } from "prisma/generated/StarFood";
import { ProductEntity } from "../entity/product.entity";

type PrismaProduct = Prisma.ProductsGetPayload<{
    include: {
        Variations: true,
        Categories: true
    },
}>

export class ProductMapper {
    static toDomain(raw: PrismaProduct): ProductEntity {
        return {
            id: raw.Id,
            name: raw.Name,
            description: raw.Description,
            imgUrl: raw.ImgUrl,
            variations: raw.Variations.map((item) => ({
                id: item.Id,
                name: item.Name,
                value: item.Value,
                productId: item.ProductId,
                restaurantId: item.RestaurantId,
                active: item.Active,
                createdAt: item.CreatedAt,
                updatedAt: item.UpdatedAt,
                deletedAt: item.DeletedAt
            })),
            category: {
                id: raw.Categories.Id,
                name: raw.Categories.Name
            },
            restaurantId: raw.RestaurantId,
            status: raw.Status,
            active: raw.Active,
            createdAt: raw.CreatedAt,
            updatedAt: raw.UpdatedAt,
            deletedAt: raw.DeletedAt
        }
    }

    // static toPrisma(product: ProductEntity): Prisma.ProductsUncheckedCreateInput {
    //     return {

    //     }
    // }
}