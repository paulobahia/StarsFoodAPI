import { Controller } from '@nestjs/common';
import { ProductsOrdersService } from '../services/orders-products.service';

@Controller('orders-products')
export class ProductsOrdersController {
  constructor(private readonly ordersProductsService: ProductsOrdersService) { }
}
