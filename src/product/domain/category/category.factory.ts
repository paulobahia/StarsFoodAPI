import { Category, CategoryImplement, CategoryProperties } from "src/product/domain/category/category";

type CreateCategoryOptions = Readonly<{
    name: string;
    restaurantId: number;
}>;

export class CategoryFactory {

    create(options: CreateCategoryOptions): Category {
        return new CategoryImplement({
            ...options,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            status: false,
            active: true
        })
    }

    reconstitute(properties: CategoryProperties): Category {
        return new CategoryImplement(properties)
    }
}