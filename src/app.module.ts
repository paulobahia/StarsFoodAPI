import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './shared/authentication/authentication.module';
import { ProductsModule } from './product/products.module';
import { RestaurantsModule } from './restaurant/restaurants.module';
import { OrdersModule } from './order/orders.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthenticationModule, RestaurantsModule, ProductsModule, OrdersModule],
  providers: [],
})
export class AppModule { }
