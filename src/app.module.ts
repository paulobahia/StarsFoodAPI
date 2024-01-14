import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './shared/authentication/authentication.module';
import { ProductsModule } from './product/products.module';
import { RestaurantsModule } from './restaurant/restaurants.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthenticationModule, RestaurantsModule, ProductsModule],
  providers: [],
})
export class AppModule { }
