import { Prisma } from "@prisma/client";
import { Product } from "@/domain/enterprise/entities/product";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Category } from "@/domain/enterprise/entities/category";
import { Variation } from "@/domain/enterprise/entities/variations";

type PrismaProduct = Prisma.ProductsGetPayload<{
    include: {
        Categories: true, Variations: true
    },
}>

export class PrismaProductMapper {
    static toDomain(raw: PrismaProduct): Product {

        const Variations = raw.Variations.map((variation) => {
            return Variation.create({
                name: variation.Name,
                value: variation.Value,
                productId: new UniqueEntityID(variation.ProductId),
                restaurantId: new UniqueEntityID(variation.RestaurantId)
            },
                new UniqueEntityID(variation.Id)
            )
        })

        return Product.create(
            {
                name: raw.Name,
                description: raw.Description,
                imgUrl: [''],
                variation: Variations,
                restaurantId: new UniqueEntityID(raw.RestaurantId),
                categoryId: new UniqueEntityID(raw.CategoryId),
                createdTime: raw.CreatedTime,
                updateTime: raw.UpdateTime,
                status: raw.Status,
                active: raw.Active,
                category: Category.create(
                    {
                        name: raw.Categories.Name,
                        restaurantId: new UniqueEntityID(raw.RestaurantId),
                    },
                    new UniqueEntityID(raw.CategoryId)
                )
            },
            new UniqueEntityID(raw.Id),
        )
    }

    static toPrisma(product: Product): Prisma.ProductsUncheckedCreateInput {
        return {
            Name: product.name,
            Description: product.description,
            ImgUrl: product.imgUrl,
            CategoryId: product.categoryId.toValue(),
            RestaurantId: product.restaurantId.toValue(),
            Status: product.status,
            Active: product.active
        }
    }
}