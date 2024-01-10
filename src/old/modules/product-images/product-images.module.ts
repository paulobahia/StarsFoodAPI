import { Module } from '@nestjs/common';
import { ProductImagesService } from './services/product-images.service';
import { ProductImagesController } from './controllers/product-images.controller';

@Module({
  controllers: [ProductImagesController],
  providers: [ProductImagesService],
})
export class ProductImagesModule {}
