import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindProductByIdQuery } from "./find-product-by-id.query";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";
import { ProductQuery } from "./product.query";
import { FindProductByIdResult } from "./find-product-by-id.result";

@QueryHandler(FindProductByIdQuery)
export class FindProductByIdHandler implements IQueryHandler<FindProductByIdQuery, FindProductByIdResult> {
    @Inject(InjectionToken.PRODUCT_QUERY)
    private readonly productQuery: ProductQuery;
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute(query: FindProductByIdQuery): Promise<FindProductByIdResult> {
        const { id, restaurantId } = query
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const product = await this.productQuery.findById(id, restaurantId)

        if (!product) {
            throw new NotFoundException()
        }

        return product
    }
}