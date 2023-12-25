import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthsModule } from './modules/auths/auths.module';
import { ProductsModule } from './modules/products/products.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { VariationsModule } from './modules/variations/variations.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { OrdersModule } from './modules/orders/orders.module';
import { GatewayModule } from './gateway/gateway.module';
import { UsersModule } from './modules/users/users.module';
import { S3uploadModule } from './modules/s3upload/s3upload.module';
import { ProductImagesModule } from './modules/product-images/product-images.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthsModule, ProductsModule, PrismaModule, VariationsModule, CategoriesModule, OrdersModule, GatewayModule, UsersModule, S3uploadModule, ProductImagesModule],
  providers: [],
})
export class AppModule { }
