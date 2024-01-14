import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from '@nestjs/cqrs';
import { StarFoodPrismaService } from "./infrastructure/database/star-food.prisma.service";
import { InjectionToken } from "./application/injection-token";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { CategoryQueryImplement } from "./infrastructure/query/category-query.implement";
import { FindCategoriesHandler } from "./application/query/category/find-categories.handle";
import { CategoriesController } from "./interface/categories.controller";
import { IdentityServerPrismaService } from "./infrastructure/database/identity-server.prisma.service";
import { CategoryRepositoryImplement } from "./infrastructure/repository/category-repository.implement";
import { CategoryFactory } from "./domain/category.factory";
import { CreateCategoryHandler } from "./application/command/category/create-category.handle";
import { FindCategoryByIdHandler } from "./application/query/category/find-category-by-id.handle";
import { UpdateCategoryHandler } from "./application/command/category/update-category.handle";
import { UpdateStatusCategoryHandler } from "./application/command/category/update-status-category.handle";
import { DeleteCategoryHandler } from "./application/command/category/delete-category.handle";
import { RestaurantQueryImplement } from "src/restaurant/infrastructure/query/category-query.implement";

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
    }
]

const application = [
    FindCategoriesHandler,
    FindCategoryByIdHandler,
    CreateCategoryHandler,
    UpdateCategoryHandler,
    UpdateStatusCategoryHandler,
    DeleteCategoryHandler
]

const domain = [CategoryFactory]

@Module({
    imports: [CqrsModule],
    controllers: [CategoriesController],
    providers: [...application, ...infrastructure, ...domain],
})
export class ProductsModule { }