import { Body, Controller, Get, HttpStatus, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/shared/authentication/jwt.guard";
import { InstanceId, RestaurantId } from "src/utils/decorators";
import { ResponseDescription } from "src/utils/response-description";
import { FindOrdersResponseDto } from "./dto/orders/find-orders-response.dto";
import { FindOrdersQuery } from "../application/query/orders/find-orders.query";
import { CreateOrderRequestDto } from "./dto/orders/create-order-request.dto";
import { CreateOrderCommand } from "../application/command/order/create-order.command";
import { UpdateStatusOrderRequestParam } from "./dto/orders/update-status-order-request-param.dto";
import { UpdateStatusOrderRequestDto } from "./dto/orders/update-status-table-request.dto";
import { UpdateStatusOrderCommand } from "../application/command/order/update-status-order.command";

@ApiTags('Orders')
@Controller('api/orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
    constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) { }

    @Get()
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK, type: FindOrdersResponseDto })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async findProducts(@RestaurantId() restaurantId: number): Promise<FindOrdersResponseDto> {
        const query = new FindOrdersQuery(restaurantId)
        return await this.queryBus.execute(query)
    }

    @Post()
    @ApiResponse({ status: HttpStatus.CREATED, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async createTable(@Body() body: CreateOrderRequestDto, @RestaurantId() restaurantId: number, @InstanceId() userId: number): Promise<void> {
        const { tableId, variations } = body
        const command = new CreateOrderCommand(tableId, variations, userId, restaurantId)
        await this.commandBus.execute(command)
    }

    @Patch(':id')
    @ApiResponse({ status: HttpStatus.OK, description: ResponseDescription.OK })
    @ApiBadRequestResponse({ description: ResponseDescription.BAD_REQUEST })
    @ApiUnauthorizedResponse({ description: ResponseDescription.UNAUTHORIZED })
    @ApiInternalServerErrorResponse({ description: ResponseDescription.INTERNAL_SERVER_ERROR })
    async updateStatusOrder(@Param() param: UpdateStatusOrderRequestParam, @Body() body: UpdateStatusOrderRequestDto, @RestaurantId() restaurantId: number) {
        const id = parseInt(param.id, 10)
        const { status } = body
        const command = new UpdateStatusOrderCommand(id, status, restaurantId)
        return await this.commandBus.execute(command)
    }
}