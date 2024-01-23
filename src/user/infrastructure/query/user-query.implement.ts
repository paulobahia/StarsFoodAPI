import { IdentityServerPrismaService } from "src/shared/database/identity-server.prisma.service";
import { UserQuery } from "../../application/query/user.query";
import { Injectable } from "@nestjs/common";
import { FindUserByIdResult } from "../../application/query/find-user-by-id.result";
import { UserMapper } from "../mappers/user.mapper";

@Injectable()
export class UserQueryImplement implements UserQuery {
    constructor(private readonly prisma: IdentityServerPrismaService) { }

    async findById(id: number, restaurantId: number): Promise<FindUserByIdResult | null> {
        const table = await this.prisma.user.findUnique({
            where: {
                Id: id,
                RestaurantId: restaurantId,
            }
        })

        if (!table) {
            return null
        }

        return UserMapper.toDomain(table)
    }
}