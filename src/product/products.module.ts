import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from '@nestjs/cqrs';
import { StarFoodPrismaService } from "../shared/database/star-food.prisma.service";
import { InjectionToken } from "./application/injection-token";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { CategoryQueryImplement } from "./infrastructure/query/category-query.implement";
import { FindCategoriesHandler } from "./application/query/category/find-categories.handle";
import { CategoriesController } from "./interface/categories.controller";
import { IdentityServerPrismaService } from "../shared/database/identity-server.prisma.service";
import { CategoryRepositoryImplement } from "./infrastructure/repository/category-repository.implement";
import { ProductRepositoryImplement } from "./infrastructure/repository/product-repository.implement";
import { CategoryFactory } from "./domain/category/category.factory";
import { CreateCategoryHandler } from "./application/command/category/create-category.handle";
import { FindCategoryByIdHandler } from "./application/query/category/find-category-by-id.handle";
import { UpdateCategoryHandler } from "./application/command/category/update-category.handle";
import { UpdateStatusCategoryHandler } from "./application/command/category/update-status-category.handle";
import { DeleteCategoryHandler } from "./application/command/category/delete-category.handle";
import { RestaurantQueryImplement } from "src/restaurant/infrastructure/query/restaurant-query.implement";
import { RestaurantRepositoryImplement } from "src/restaurant/infrastructure/repository/restaurant-repository.implement";
import { RestaurantFactory } from "src/restaurant/domain/restaurant.factory";
import { ProductsController } from "./interface/products.controller";
import { FindProductsHandler } from "./application/query/product/find-products.handle";
import { ProductQueryImplement } from "./infrastructure/query/product-query.implement";
import { CreateProductHandler } from "./application/command/product/create-product.handle";
import { ProductFactory } from "./domain/product/product.factory";
import { VariationFactory } from "./domain/variation/variation.factory";
import { CreateVariationHandler } from "./application/command/variation/create-variation.handle";
import { VariationRepositoryImplement } from "./infrastructure/repository/variation-repository.implement";
import { UpdateVariationHandler } from "./application/command/variation/update-variation.handle";
import { UpdateProductHandler } from "./application/command/product/update-product.handle";
import { FindProductByIdHandler } from "./application/query/product/find-product-by-id.handle";
import { UpdateStatusProductHandler } from "./application/command/product/update-status-product.handle";
import { DeleteProductCommand } from "./application/command/product/delete-product.command";
import { DeleteProductHandler } from "./application/command/product/delete-product.handle";

const infrastructure: Provider[] = [
    StarFoodPrismaService,
    IdentityServerPrismaService,
    {
        provide: InjectionToken.CATEGORY_REPOSITORY,
        useClass: CategoryRepositoryImplement
    },
    {
        provide: InjectionToken.CATEGORY_QUERY,
        useClass: CategoryQueryImplement
    },
    {
        provide: InjectionRestaurantToken.RESTAURANT_QUERY,
        useClass: RestaurantQueryImplement
    },
    {
        provide: InjectionRestaurantToken.RESTAURANT_REPOSITORY,
        useClass: RestaurantRepositoryImplement
    },
    {
        provide: InjectionToken.PRODUCT_REPOSITORY,
        useClass: ProductRepositoryImplement
    },
    {
        provide: InjectionToken.PRODUCT_QUERY,
        useClass: ProductQueryImplement
    },
    {
        provide: InjectionToken.VARIATION_REPOSITORY,
        useClass: VariationRepositoryImplement
    },
]

const application = [
    FindCategoriesHandler,
    FindCategoryByIdHandler,
    CreateCategoryHandler,
    UpdateCategoryHandler,
    UpdateStatusCategoryHandler,
    DeleteCategoryHandler,
    FindProductsHandler,
    CreateProductHandler,
    DeleteProductHandler,
    FindProductByIdHandler,
    UpdateStatusProductHandler,
    DeleteProductCommand,
    CreateVariationHandler,
    UpdateProductHandler,
    UpdateVariationHandler,
]

const domain = [RestaurantFactory, CategoryFactory, ProductFactory, VariationFactory]

@Module({
    imports: [CqrsModule],
    controllers: [ProductsController, CategoriesController],
    providers: [...application, ...infrastructure, ...domain],
})
export class ProductsModule { }