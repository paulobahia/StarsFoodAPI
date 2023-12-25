import { $Enums, Prisma } from '@prisma/client';

export class OrdersEntity implements Prisma.OrderCreateInput {
  Status?: $Enums.Status | undefined;
  CreatedTime?: string | Date | undefined;
  UpdateTime?: string | Date | undefined;
  Paid?: boolean | undefined;
  PaymentType?: string | null | undefined;
  Table: Prisma.TableCreateNestedOneWithoutOrderInput;
  OrderProducts?: Prisma.OrderProductCreateNestedManyWithoutOrderInput | undefined;
  Active?: boolean | undefined;
  Restaurant: Prisma.RestaurantsCreateNestedOneWithoutOrderInput;
}