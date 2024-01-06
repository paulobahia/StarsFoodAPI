import { Global, Module } from "@nestjs/common";
import { CategoriesRepository } from "@/domain/application/repositores/categories-repository";
import { PrismaCategoriesRepository } from "./prisma/repositories/prisma-categories-repository";
import { StarFoodPrismaService } from "./prisma/star-food.prisma.service";
import { IdentityServerPrismaService } from "./prisma/identity-server.prisma.service";
import { RestaurantsRepository } from "@/domain/application/repositores/restaurants-repository";
import { PrismaRestaurantsRepository } from "./prisma/repositories/primsa-restaurants-repository";
import { ProductsRepository } from "@/domain/application/repositores/products-repository";
import { PrismaProductsRepository } from "./prisma/repositories/primsa-products-repository";

@Global()
@Module({
    providers: [
        StarFoodPrismaService,
        IdentityServerPrismaService,
        {
            provide: CategoriesRepository,
            useClass: PrismaCategoriesRepository
        },
        {
            provide: RestaurantsRepository,
            useClass: PrismaRestaurantsRepository
        },
        {
            provide: ProductsRepository,
            useClass: PrismaProductsRepository
        }
    ],
    exports: [
        StarFoodPrismaService,
        IdentityServerPrismaService,
        CategoriesRepository,
        RestaurantsRepository,
        ProductsRepository
    ]
})
export class DatabaseModule { }