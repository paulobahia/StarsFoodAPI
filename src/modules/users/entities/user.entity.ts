import { Prisma } from "prisma/generated/IdentityServer";

export class User implements Prisma.UserUncheckedCreateInput {
    Id?: number | undefined;
    Name: string;
    Email: string;
    Password: string;
    BirthDate: string | Date;
    Gender: string;
    Role: string;
    CreatedTime?: string | Date | undefined;
    UpdateTime?: string | Date | undefined;
    RestaurantId: number;
}
