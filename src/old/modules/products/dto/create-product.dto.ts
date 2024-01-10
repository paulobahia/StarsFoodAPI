import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MessagesHelper } from '../helpers/messages.helper';
import { ApiProperty } from '@nestjs/swagger';
import { CreateVariationDto } from 'src/modules/variations/dto/create-variation.dto';

export class CreateProductDto {

  @ApiProperty()
  @IsNotEmpty({ message: MessagesHelper.NAME_PRODUCT_REQUIRED })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: MessagesHelper.DESCRIPTION_REQUIRED })
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: MessagesHelper.IMAGE_REQUIRED })
  @IsArray()
  imgUrl: Array<string>;

  @ApiProperty()
  @IsNotEmpty({ message: MessagesHelper.CATEGORYID_REQUIRED })
  @IsNumber()
  categoryId: number;

  @ApiProperty({ type: [CreateVariationDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateVariationDto)
  variations: CreateVariationDto[];
}
