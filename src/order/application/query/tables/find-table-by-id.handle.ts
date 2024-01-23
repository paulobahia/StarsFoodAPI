import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindTableByIdResult } from "./find-table-by-id.result";
import { Inject, NotFoundException } from "@nestjs/common";
import { InjectionToken } from "../../injection-token";
import { TableQuery } from "src/order/application/query/tables/table.query";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { RestaurantQuery } from "src/restaurant/application/query/restaurant.query";
import { FindTableByIdQuery } from "./find-table-by-query";

@QueryHandler(FindTableByIdQuery)
export class FindTableByIdHandler implements IQueryHandler<FindTableByIdQuery, FindTableByIdResult> {
    @Inject(InjectionToken.TABLE_QUERY)
    private readonly tableQuery: TableQuery;
    @Inject(InjectionRestaurantToken.RESTAURANT_QUERY)
    private readonly restaurantQuery: RestaurantQuery

    async execute(query: FindTableByIdQuery): Promise<FindTableByIdResult> {
        const { id, restaurantId } = query
        const restaurant = await this.restaurantQuery.findById(restaurantId)

        if (!restaurant) {
            throw new NotFoundException()
        }

        const table = await this.tableQuery.findById(id, restaurantId)

        if (!table) {
            throw new NotFoundException()
        }

        return table
    }
}