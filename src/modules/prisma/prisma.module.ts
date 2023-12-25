import { Module, Global } from '@nestjs/common'

import { StarFoodPrismaService } from './services/star-food.prisma.service'
import { IdentityServerPrismaService } from './services/identity-server.prisma.service'

@Global()
@Module({
  providers: [StarFoodPrismaService, IdentityServerPrismaService],
  exports: [StarFoodPrismaService, IdentityServerPrismaService]
})
export class PrismaModule { }