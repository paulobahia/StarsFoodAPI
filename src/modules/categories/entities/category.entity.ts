import { Prisma } from "@prisma/client";

export class CategoryEntity implements Prisma.CategoriesCreateInput {
    Name: string;
    CreatedTime?: string | Date | undefined;
    UpdateTime?: string | Date | undefined;
    Products?: Prisma.ProductsCreateNestedManyWithoutCategoriesInput | undefined;
    Restaurant: Prisma.RestaurantsCreateNestedOneWithoutCategoriesInput;
    Status?: boolean | undefined;
    Active?: boolean | undefined;
}
