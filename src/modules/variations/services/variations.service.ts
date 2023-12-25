import { Injectable } from '@nestjs/common';
import { CreateVariationDto } from '../dto/create-variation.dto';
import { VariationsRepository } from '../repository/variations.repository';

@Injectable()
export class VariationsService {
  constructor(private readonly variationsRepository: VariationsRepository) { }

  async create(RestaurantId: string, ProductId: number, data: CreateVariationDto[]) {
    return await this.variationsRepository.createMany(RestaurantId, ProductId, data)
  }

}
