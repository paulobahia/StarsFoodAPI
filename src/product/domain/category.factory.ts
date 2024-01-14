import { Category, CategoryImplement, CategoryProperties } from "src/product/domain/category";

type CreateCategoryOptions = Readonly<{
    name: string;
    restaurantId: number;
}>;

export class CategoryFactory {

    create(options: CreateCategoryOptions): Category {
        return new CategoryImplement({
            ...options,
            createdTime: new Date(),
            updatedTime: new Date(),
            status: false,
            active: true
        })
    }

    reconstitute(properties: CategoryProperties): Category {
        return new CategoryImplement(properties)
    }
}