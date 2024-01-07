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
import { CreateProductController } from './controllers/create-product.controller';
import { RegisterProductUseCase } from '@/domain/application/use-cases/register-product';
import { EditProductController } from './controllers/edit-product.controller';
import { EditProductUseCase } from '@/domain/application/use-cases/edit-product';
import { EditVariationUseCase } from '@/domain/application/use-cases/edit-variation';
import { FetchProductsController } from './controllers/fetch-product.controller';
import { FetchProductsUseCase } from '@/domain/application/use-cases/fetch-product';
import { EditStatusProductController } from './controllers/edit-status-product.controller';
import { EditStatusProductUseCase } from '@/domain/application/use-cases/edit-status-product';
import { DeleteProductController } from './controllers/delete-product.controller';
import { DeleteProductUseCase } from '@/domain/application/use-cases/delete-product';

@Module({
    imports: [DatabaseModule],
    controllers: [
        GetProductsController,
        CreateProductController,
        EditProductController,
        FetchProductsController,
        EditStatusProductController,
        DeleteProductController,
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
        DeleteProductUseCase,
        DeleteCategoryUseCase,
        GetProductsUseCase,
        RegisterProductUseCase,
        EditProductUseCase,
        FetchProductsUseCase,
        EditStatusProductUseCase,
        EditVariationUseCase
    ]
})
export class HttpModule { }