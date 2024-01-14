import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindCategoryByIdQuery } from "./find-category-by-id.query";
import { FindCategoryByIdResult } from "./find-category-by-id.result";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { CategoryQuery } from "./category.query";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";

@QueryHandler(FindCategoryByIdQuery)
export class FindCategoryByIdHandler implements IQueryHandler<FindCategoryByIdQuery, FindCategoryByIdResult> {
    @Inject(InjectionToken.CATEGORY_QUERY)
    private readonly categoryQuery: CategoryQuery;
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute(query: FindCategoryByIdQuery): Promise<FindCategoryByIdResult> {
        const { id, restaurantId } = query
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const category = await this.categoryQuery.findById(id, restaurantId)

        if (!category) {
            throw new NotFoundException()
        }

        return category
    }
}