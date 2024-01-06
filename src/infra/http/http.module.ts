import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module';
import { GetCategoriesController } from './controllers/get-categories.controller';
import { GetCategoriesUseCase } from '@/domain/application/use-cases/get-categories';
import { CreateCategoryController } from './controllers/create-category.controller';
import { RegisterCategoryUseCase } from '@/domain/application/use-cases/register-category';
import { EditCategoryController } from './controllers/edit-category.controller';
import { EditCategoryUseCase } from '@/domain/application/use-cases/edit-category';
import { FetchCategoriesController } from './controllers/fetch-category.controller';
import { FetchCategoriesUseCase } from '@/domain/application/use-cases/fetch-category';
import { EditStatusCategoryController } from './controllers/edit-status-category.controller';
import { EditStatusCategoryUseCase } from '@/domain/application/use-cases/edit-status-category';
import { DeleteCategoryController } from './controllers/delete-category.controller';
import { DeleteCategoryUseCase } from '@/domain/application/use-cases/delete-category';
import { GetProductsController } from './controllers/get-products.controller';
import { GetProductsUseCase } from '@/domain/application/use-cases/get-products';

@Module({
    imports: [DatabaseModule],
    controllers: [
        GetProductsController,
        GetCategoriesController,
        CreateCategoryController,
        EditCategoryController,
        FetchCategoriesController,
        EditStatusCategoryController,
        DeleteCategoryController,
    ],
    providers: [
        GetCategoriesUseCase,
        RegisterCategoryUseCase,
        EditCategoryUseCase,
        FetchCategoriesUseCase,
        EditStatusCategoryUseCase,
        DeleteCategoryUseCase,
        GetProductsUseCase
    ]
})
export class HttpModule { }