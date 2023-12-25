import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './controllers/categories.controller';
import { CategoryRepository } from './repository/categories.repository';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoryRepository],
})
export class CategoriesModule { }
