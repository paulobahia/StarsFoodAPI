import { Module, Provider } from "@nestjs/common"
import { CqrsModule } from "@nestjs/cqrs"
import { IdentityServerPrismaService } from "src/shared/database/identity-server.prisma.service"
import { StarFoodPrismaService } from "src/shared/database/star-food.prisma.service"
import { TablesController } from "./interface/tables.controller"
import { RestaurantQueryImplement } from "src/restaurant/infrastructure/query/restaurant-query.implement";
import { InjectionToken as InjectionRestaurantToken } from "src/restaurant/application/injection-token";
import { InjectionToken as InjectionUserToken } from "src/user/application/injection-token";
import { InjectionToken as InjectionProductToken } from "src/product/application/injection-token";
import { InjectionToken } from "./application/injection-token"
import { TableQueryImplement } from "./infrastructure/query/table-query.implement"
import { FindCategoriesHandler } from "./application/query/tables/find-tables.handle"
import { BarcodeModule } from "src/shared/barcode/hash-barcode.module"
import { CreateTableHandler } from "./application/command/table/create-table.handle"
import { TableRepositoryImplement } from "./infrastructure/repository/table-repository.implement"
import { TableFactory } from "./domain/table/table.factory"
import { FindTableByIdHandler } from "./application/query/tables/find-table-by-id.handle"
import { UpdateStatusTableHandler } from "./application/command/table/update-status-table.handle"
import { DeleteTableHandler } from "./application/command/table/delete-table.handle"
import { RestaurantRepositoryImplement } from "src/restaurant/infrastructure/repository/restaurant-repository.implement"
import { RestaurantFactory } from "src/restaurant/domain/restaurant.factory"
import { OrdersController } from "./interface/orders.controller"
import { FindOrdersHandler } from "./application/query/orders/find-orders.handle"
import { OrderQueryImplement } from "./infrastructure/query/order-query.implement"
import { UserQueryImplement } from "src/user/infrastructure/query/user-query.implement"
import { UserRepositoryImplement } from "src/user/infrastructure/repository/order-repository.implement"
import { UserFactory } from "src/user/domain/user.factory"
import { CreateOrderHandler } from "./application/command/order/create-order.handle"
import { OrderRepositoryImplement } from "./infrastructure/repository/order-repository.implement"
import { OrderFactory } from "./domain/order/order.factory"
import { CreateProductOrderHandler } from "./application/command/products-order/create-product-order.handle"
import { ProductRepositoryImplement } from "src/product/infrastructure/repository/product-repository.implement"
import { ProductFactory } from "src/product/domain/product/product.factory"
import { ProductOrderFactory } from "./domain/product-order/product-order.factory"
import { ProductOrderRepositoryImplement } from "./infrastructure/repository/product-order-repository.implement"
import { SocketGateway } from "src/shared/websocket/socket-gateway"
import { UpdateStatusOrderHandler } from "./application/command/order/update-status-order.handle"

const infrastructure: Provider[] = [
    StarFoodPrismaService,
    IdentityServerPrismaService,
    SocketGateway,
    {
        provide: InjectionRestaurantToken.RESTAURANT_QUERY,
        useClass: RestaurantQueryImplement
    },
    {
        provide: InjectionRestaurantToken.RESTAURANT_REPOSITORY,
        useClass: RestaurantRepositoryImplement
    },
    {
        provide: InjectionToken.TABLE_QUERY,
        useClass: TableQueryImplement
    },
    {
        provide: InjectionToken.TABLE_REPOSITORY,
        useClass: TableRepositoryImplement
    },
    {
        provide: InjectionToken.ORDER_QUERY,
        useClass: OrderQueryImplement
    },
    {
        provide: InjectionToken.ORDER_REPOSITORY,
        useClass: OrderRepositoryImplement
    },
    {
        provide: InjectionUserToken.USER_QUERY,
        useClass: UserQueryImplement
    },
    {
        provide: InjectionUserToken.USER_REPOSITORY,
        useClass: UserRepositoryImplement
    },
    {
        provide: InjectionProductToken.PRODUCT_REPOSITORY,
        useClass: ProductRepositoryImplement
    },
    {
        provide: InjectionToken.PRODUCT_ORDER_REPOSITORY,
        useClass: ProductOrderRepositoryImplement
    },
]

const application = [
    FindCategoriesHandler,
    CreateTableHandler,
    FindTableByIdHandler,
    UpdateStatusTableHandler,
    DeleteTableHandler,
    FindOrdersHandler,
    CreateOrderHandler,
    CreateProductOrderHandler,
    UpdateStatusOrderHandler
]

const domain = [TableFactory, RestaurantFactory, UserFactory, OrderFactory, ProductFactory, ProductOrderFactory]

@Module({
    imports: [CqrsModule, BarcodeModule],
    controllers: [TablesController, OrdersController],
    providers: [...application, ...infrastructure, ...domain],
})
export class OrdersModule { }