import { Prisma } from "@prisma/client";

export class Variation implements Prisma.VariationsCreateInput {
    Name: string;
    Value: string;
    Products: Prisma.ProductsCreateNestedOneWithoutVariationsInput;
    Restaurant: Prisma.RestaurantsCreateNestedOneWithoutVariationsInput;
    CreatedTime?: string | Date | undefined;
    UpdateTime?: string | Date | undefined;
    Active?: boolean | undefined;
}
