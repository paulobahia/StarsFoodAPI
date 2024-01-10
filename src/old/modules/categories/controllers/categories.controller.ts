import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Put } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auths/strategies/jwt/jwt.guard';
import { RestaurantId } from 'src/decorators/request-context.decorator';
import { HandleStatusCategoryDto } from '../dto/handle-status-category-dto';

@ApiTags('Categories')
@Controller('api/categories')
@UseGuards(JwtAuthGuard)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
  async getAllCategories(@RestaurantId() RestaurantId: string) {
    return await this.categoriesService.findAll(RestaurantId)
  }

  @HttpCode(201)
  @Post()
  async create(@RestaurantId() RestaurantId: string, @Body() createCategoryDto: CreateCategoryDto) {
    await this.categoriesService.create(RestaurantId, createCategoryDto)
  }

  @HttpCode(200)
  @Put(':id')
  async updateCategory(@Body() data: UpdateCategoryDto, @Param('id') CategoryId: string, @RestaurantId() RestaurantId: string) {
    return await this.categoriesService.update(RestaurantId, CategoryId, data)
  }

  @Get(':id')
  async getProduct(@RestaurantId() RestaurantId: string, @Param('id') CategoryId: string) {
    return await this.categoriesService.findUnique(RestaurantId, CategoryId)
  }

  @HttpCode(200)
  @Patch(':id')
  async update(@Param('id') CategoryId: string, @RestaurantId() RestaurantId: string, @Body() data: HandleStatusCategoryDto) {
    return await this.categoriesService.handleStatus(RestaurantId, CategoryId, data)
  }

  @HttpCode(200)
  @Delete(':id')
  async remove(@Param('id') CategoryId: string, @RestaurantId() RestaurantId: string) {
    return await this.categoriesService.remove(RestaurantId, CategoryId)
  }
}
