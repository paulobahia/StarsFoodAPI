import { Module } from '@nestjs/common';
import { VariationsService } from './services/variations.service';
import { VariationsRepository } from './repository/variations.repository';

@Module({
  controllers: [],
  providers: [VariationsService, VariationsRepository],
})
export class VariationsModule {}
