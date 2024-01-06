import { Prisma, Categories as PrismaCategory } from "@prisma/client";
import { Category } from "@/domain/enterprise/entities/category";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export class PrismaCategoryMapper {
    static toDomain(raw: PrismaCategory): Category {
        return Category.create(
            {
                name: raw.Name,
                restaurantId: new UniqueEntityID(raw.RestaurantId),
                createdTime: raw.CreatedTime,
                updateTime: raw.UpdateTime,
                status: raw.Status,
                active: raw.Active
            },
            new UniqueEntityID(raw.Id),
        )
    }

    static toPrisma(category: Category): Prisma.CategoriesUncheckedCreateInput {
        return {
            Name: category.name,
            RestaurantId: category.restaurantId.toValue(),
            Status: category.status,
            Active: category.active
        }
    }
}