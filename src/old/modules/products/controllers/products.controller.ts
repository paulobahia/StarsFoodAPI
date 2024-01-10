import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { RestaurantId } from 'src/decorators/request-context.decorator';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auths/strategies/jwt/jwt.guard';
import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { HandleStatusProductDto } from '../dto/handle-status-product.dto';

@ApiTags('Products')
@Controller('api/products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async getAllProducts(@RestaurantId() RestaurantId: string) {
    return await this.productsService.findAll(RestaurantId)
  }

  @HttpCode(201)
  @Post()
  async createProduct(@Body() data: CreateProductDto, @RestaurantId() RestaurantId: string) {
    return await this.productsService.create(RestaurantId, data)
  }

  @HttpCode(200)
  @Put(':id')
  async updateProduct(@Body() data: UpdateProductDto, @Param('id') ProductId: string, @RestaurantId() RestaurantId: string) {
    return await this.productsService.update(RestaurantId, ProductId, data)
  }

  @Get(':id')
  async getProduct(@RestaurantId() RestaurantId: string, @Param('id') ProductId: string) {
    return await this.productsService.findUnique(RestaurantId, ProductId)
  }

  @HttpCode(200)
  @Patch(':id')
  async updateStatus(@Param('id') ProductId: string, @RestaurantId() RestaurantId: string, @Body() data: HandleStatusProductDto) {
    return await this.productsService.handleStatus(RestaurantId, ProductId, data)
  }

  @HttpCode(200)
  @Delete(':id')
  async removeProduct(@Param('id') ProductId: string, @RestaurantId() RestaurantId: string) {
    return await this.productsService.remove(RestaurantId, ProductId)
  }
}
