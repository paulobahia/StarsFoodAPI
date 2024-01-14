import { Categories, Prisma } from "prisma/generated/StarFood";
import { CategoryEntity } from "../entity/category.entity";

export class CategoryMapper {
    static toDomain(raw: Categories): CategoryEntity {
        return {
            id: raw.Id,
            name: raw.Name,
            restaurantId: raw.RestaurantId,
            status: raw.Status,
            active: raw.Active,
            createdTime: raw.CreatedTime,
            updateTime: raw.UpdateTime
        }
    }

    static toPrisma(category: CategoryEntity): Prisma.CategoriesUncheckedCreateInput {
        return {
            Name: category.name,
            RestaurantId: category.restaurantId,
        }
    }
}