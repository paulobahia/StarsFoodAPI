import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { StarFoodPrismaService } from "src/product/infrastructure/database/star-food.prisma.service";
import { InjectionToken } from "./application/injection-token";
import { RestaurantQueryImplement } from "./infrastructure/query/category-query.implement";

const infrastructure: Provider[] = [
    StarFoodPrismaService,
    {
        provide: InjectionToken.RESTAURANT_QUERY,
        useClass: RestaurantQueryImplement
    }
]

@Module({
    imports: [CqrsModule],
    controllers: [],
    providers: [...infrastructure],
})
export class RestaurantsModule { }