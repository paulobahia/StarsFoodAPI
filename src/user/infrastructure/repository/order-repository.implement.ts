import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "src/user/domain/user.repository";
import { User as UserPrisma } from "prisma/generated/IdentityServer";
import { IdentityServerPrismaService } from "src/shared/database/identity-server.prisma.service";
import { UserFactory } from "src/user/domain/user.factory";

@Injectable()
export class UserRepositoryImplement implements UserRepository {
    constructor(private readonly prisma: IdentityServerPrismaService) { }
    @Inject() private readonly userFactory: UserFactory

    async findById(id: number, restaurantId: number): Promise<UserPrisma | null> {

        const user = await this.prisma.user.findUnique({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            }
        })

        if (!user) {
            return null
        }

        return user
    }
}