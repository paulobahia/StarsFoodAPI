import { Controller } from '@nestjs/common';
import { ProductImagesService } from '../services/product-images.service';

@Controller('product-images')
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}
}
