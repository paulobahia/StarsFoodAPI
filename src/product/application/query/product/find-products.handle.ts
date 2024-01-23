import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindProductsQuery } from "./find-products.query";
import { FindProductsResult } from "./find-products.result";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";
import { InjectionToken } from "../../injection-token";
import { ProductQuery } from "./product.query";

@QueryHandler(FindProductsQuery)
export class FindProductsHandler implements IQueryHandler<FindProductsQuery, FindProductsResult> {
    @Inject(InjectionToken.PRODUCT_QUERY)
    private readonly productQuery: ProductQuery;
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute(query: FindProductsQuery): Promise<FindProductsResult> {
        const { restaurantId } = query
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        return await this.productQuery.find(restaurantId)
    }
}