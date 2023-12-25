import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryRepository } from '../repository/categories.repository';
import { MessagesHelper } from '../helpers/messages.helper';
import { HandleStatusCategoryDto } from '../dto/handle-status-category-dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) { }

  async findUnique(RestaurantId: string, CategoryId: string): Promise<CategoryEntity | null> {
    const Categories = await this.categoryRepository.findUnique(RestaurantId, CategoryId)

    if (!Categories) {
      throw new NotFoundException(MessagesHelper.CATEGORIES_NOT_FOUND)
    }

    return Categories
  }

  async findAll(RestaurantId: string): Promise<CategoryEntity[] | null> {
    const Categories = this.categoryRepository.findAll(RestaurantId)

    if (!Categories) {
      throw new NotFoundException(MessagesHelper.CATEGORIES_NOT_FOUND)
    }

    return Categories
  }

  async create(RestaurantId: string, data: CreateCategoryDto) {
    await this.categoryRepository.create(RestaurantId, data)
  }

  async update(RestaurantId: string, CategoryId: string, newCategory: UpdateCategoryDto) {
    const Category = await this.categoryRepository.findUnique(RestaurantId, CategoryId)

    if (!Category) {
      throw new NotFoundException(MessagesHelper.CATEGORIES_NOT_FOUND)
    }

    await this.categoryRepository.update(RestaurantId, CategoryId, newCategory)
  }

  async handleStatus(RestaurantId: string, CategoryId: string, data: HandleStatusCategoryDto) {
    const Category = await this.categoryRepository.findUnique(RestaurantId, CategoryId)

    if (!Category) {
      throw new NotFoundException(MessagesHelper.CATEGORIES_NOT_FOUND)
    }

    await this.categoryRepository.handleStatus(RestaurantId, CategoryId, data)
  }

  async remove(RestaurantId: string, CategoryId: string) {
    try {
      const Category = await this.categoryRepository.findUnique(RestaurantId, CategoryId)

      if (!Category) {
        throw new NotFoundException(MessagesHelper.CATEGORIES_NOT_FOUND)
      }

      await this.categoryRepository.delete(RestaurantId, CategoryId)
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
