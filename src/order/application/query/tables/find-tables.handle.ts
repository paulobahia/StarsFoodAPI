import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindTablesQuery } from "./find-tables.query";
import { FindTablesResult } from "src/order/application/query/tables/find-tables-result";
import { InjectionToken } from "src/order/application/injection-token";
import { Inject, NotFoundException } from "@nestjs/common";
import { TableQuery } from "./table.query";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";

@QueryHandler(FindTablesQuery)
export class FindCategoriesHandler implements IQueryHandler<FindTablesQuery, FindTablesResult> {
    @Inject(InjectionToken.TABLE_QUERY)
    private readonly tableQuery: TableQuery;
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute({ restaurantId }: FindTablesQuery): Promise<FindTablesResult> {
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        return await this.tableQuery.find(restaurantId)
    }
}