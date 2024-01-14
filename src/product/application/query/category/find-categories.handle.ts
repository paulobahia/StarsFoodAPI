import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindCategoriesQuery } from "./find-categories.query";
import { FindCategoriesResult } from "./find-categories.result";
import { Inject, NotFoundException } from "@nestjs/common";
import { CategoryQuery } from "./category.query";
import { InjectionToken } from "../../injection-token";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";

@QueryHandler(FindCategoriesQuery)
export class FindCategoriesHandler implements IQueryHandler<FindCategoriesQuery, FindCategoriesResult> {
    @Inject(InjectionToken.CATEGORY_QUERY)
    private readonly categoryQuery: CategoryQuery;
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute({ restaurantId }: FindCategoriesQuery): Promise<FindCategoriesResult> {
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        return await this.categoryQuery.find(restaurantId)
    }
}