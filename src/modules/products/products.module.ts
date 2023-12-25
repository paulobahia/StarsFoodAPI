import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { ProductsRepository } from './repository/products.repository';
import { VariationsService } from '../variations/services/variations.service';
import { VariationsRepository } from '../variations/repository/variations.repository';
import { ProductImagesRepository } from '../product-images/repository/product-images.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository, VariationsService, VariationsRepository, ProductImagesRepository],
})
export class ProductsModule { }
