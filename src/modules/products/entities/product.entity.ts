import { Prisma } from '@prisma/client';

export class ProductEntity implements Prisma.ProductsCreateInput {
  Name: string;
  Description: string;
  Status?: boolean | undefined;
  CreatedTime?: string | Date | undefined;
  UpdateTime?: string | Date | undefined;
  Categories: Prisma.CategoriesCreateNestedOneWithoutProductsInput;
  Restaurant: Prisma.RestaurantsCreateNestedOneWithoutProductsInput;
  Variations?: Prisma.VariationsCreateNestedManyWithoutProductsInput | undefined;
  Active?: boolean | undefined;
}