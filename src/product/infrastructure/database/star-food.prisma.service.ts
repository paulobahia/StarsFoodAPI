import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class StarFoodPrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect()
    console.log('Connection to the Star Food database has been established.')
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}