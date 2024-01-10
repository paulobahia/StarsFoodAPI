import { Module } from '@nestjs/common';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controller';
import { OrdersRepository } from './repository/orders.repository';
import { TablesProductsRepository } from '../tables/repository/tables.repository';
import { SocketGateway } from 'src/gateway/socket-gateway';
import { UsersRepository } from '../users/repository/users.repository';
import { ProductsOrdersRepository } from '../products-orders/repository/orders-products.repository';
import { ProductImagesRepository } from '../product-images/repository/product-images.repository';
import { ProductsRepository } from '../products/repository/products.repository';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository, ProductsOrdersRepository, ProductsRepository, TablesProductsRepository, UsersRepository, SocketGateway, ProductImagesRepository],
})
export class OrdersModule { }
