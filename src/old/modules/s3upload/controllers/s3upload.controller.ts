import { Controller, FileTypeValidator, HttpCode, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auths/strategies/jwt/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { s3UploadProductsImageConfig, s3UploadUsersImageConfig } from '../multer-config';

@ApiTags('S3 Upload')
@Controller('api/s3upload')
@UseGuards(JwtAuthGuard)
export class S3uploadController {

  @HttpCode(200)
  @Post('/products')
  @UseInterceptors(FileInterceptor('file', s3UploadProductsImageConfig))
  async uploadProductImage(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' })
      ]
    })
  ) file: Express.MulterS3.File) {
    const fileName = file.key.split("/")[1]
    return fileName
  }

  @HttpCode(200)
  @Post('/users')
  @UseInterceptors(FileInterceptor('file', s3UploadUsersImageConfig))
  async uploadUsersImage(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' })
      ]
    })
  ) file: Express.MulterS3.File) {
    return
  }
}
