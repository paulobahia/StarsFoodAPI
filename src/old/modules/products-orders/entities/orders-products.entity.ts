import { Prisma } from '@prisma/client';

export class ProductsOrdersEntity implements Prisma.OrderProductCreateInput {
  Quantity: number;
  CreatedTime?: string | Date | undefined;
  UpdateTime?: string | Date | undefined;
  Order: Prisma.OrderCreateNestedOneWithoutOrderProductsInput;
  Variation: Prisma.VariationsCreateNestedOneWithoutOrderProductInput;
}