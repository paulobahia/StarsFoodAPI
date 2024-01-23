import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindOrdersQuery } from "./find-orders.query";
import { InjectionToken } from "src/order/application/injection-token";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { InjectionToken as InjectionUserToken } from "src/user/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";
import { OrderQuery } from "./order.query";
import { FindOrdersResult } from "./find-orders-result";
import { UserQuery } from "src/user/application/query/user.query";

@QueryHandler(FindOrdersQuery)
export class FindOrdersHandler implements IQueryHandler<FindOrdersQuery, FindOrdersResult> {
    @Inject(InjectionToken.ORDER_QUERY)
    private readonly orderQuery: OrderQuery;
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery
    @Inject(InjectionUserToken.USER_QUERY)
    private readonly userQuery: UserQuery

    async execute({ restaurantId }: FindOrdersQuery): Promise<FindOrdersResult> {
        const restaurant = await this.restaurantQuery.findById(restaurantId)
        if (!restaurant) {
            throw new NotFoundException()
        }

        const result = await this.orderQuery.find(restaurantId)

        for (const order of result.orders) {
            const { id } = order.user

            const user = await this.userQuery.findById(id, restaurantId)

            if (!user) {
                throw new NotFoundException()
            }

            order.user.name = user.name;
            order.user.imgPath = user.imgPath;
        }

        return result
    }
}