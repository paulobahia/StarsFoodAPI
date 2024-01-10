import { Module } from '@nestjs/common';
import { ProductsOrdersService } from './services/orders-products.service';
import { ProductsOrdersController } from './controllers/products-orders.controller';

@Module({
  controllers: [ProductsOrdersController],
  providers: [ProductsOrdersService],
})
export class OrdersProductsModule { }
