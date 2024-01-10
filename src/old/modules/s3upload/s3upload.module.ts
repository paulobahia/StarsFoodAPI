import { Module } from '@nestjs/common';
import { S3uploadController } from './controllers/s3upload.controller';

@Module({
  controllers: [S3uploadController],
  providers: [],
})
export class S3uploadModule { }
