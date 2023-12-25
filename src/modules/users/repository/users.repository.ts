import { BadRequestException, Injectable } from "@nestjs/common";
import { IdentityServerPrismaService } from "src/modules/prisma/services/identity-server.prisma.service";

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: IdentityServerPrismaService) { }

    async findUnique(RestaurantId: string, UserId: number) {
        try {
            return await this.prisma.user.findUnique({
                where: { Id: UserId, RestaurantId: parseInt(RestaurantId, 10) }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }

    }

    async findAll(RestaurantId: string) {
        try {
            return await this.prisma.user.findMany({
                where: { RestaurantId: parseInt(RestaurantId, 10) }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}