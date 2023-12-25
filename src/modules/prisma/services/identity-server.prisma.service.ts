import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from 'prisma/generated/IdentityServer'

@Injectable()
export class IdentityServerPrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect()
    console.log('Connection to the Identity Server database has been established.')
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}