import { Body, Controller, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auths/strategies/jwt/jwt.guard';
import { InstanceId, RestaurantId } from 'src/decorators/request-context.decorator';
import { CreateOrderDto } from '../dto/create-order.dto';
import { HandleStatusOrderDto } from '../dto/handle-status-order.dto';

@ApiTags('Orders')
@Controller('api/orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Get()
  async getAllOrders(@RestaurantId() RestaurantId: string, @InstanceId() InstanceId: string) {
    return await this.ordersService.findAll(RestaurantId)
  }

  @HttpCode(201)
  @Post()
  async createOrder(@RestaurantId() RestaurantId: string, @Body() newOrder: CreateOrderDto, @InstanceId() InstanceId: string) {
    return await this.ordersService.create(RestaurantId, InstanceId, newOrder)
  }

  @HttpCode(200)
  @Patch(':id')
  async handleStatus(@Param('id') OrderId: string, @RestaurantId() RestaurantId: string, @Body() data: HandleStatusOrderDto) {
    return await this.ordersService.handleStatus(RestaurantId, OrderId, data)
  }
}
