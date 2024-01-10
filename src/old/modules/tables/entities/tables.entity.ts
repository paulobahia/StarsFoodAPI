import { Prisma } from '@prisma/client';

export class TablesEntity implements Prisma.TableCreateInput {
  Id: number;
  Status?: boolean | undefined;
  Number: number;
  CreatedTime?: string | Date | undefined;
  UpdateTime?: string | Date | undefined;
  Active?: boolean | undefined;
  Restaurant: Prisma.RestaurantsCreateNestedOneWithoutTableInput;
  Order?: Prisma.OrderCreateNestedManyWithoutTableInput | undefined;
}