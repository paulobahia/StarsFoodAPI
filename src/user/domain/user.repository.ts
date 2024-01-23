import { User } from "prisma/generated/IdentityServer";

export interface UserRepository {
    findById(id: number, restaurantId: number): Promise<User | null>
}