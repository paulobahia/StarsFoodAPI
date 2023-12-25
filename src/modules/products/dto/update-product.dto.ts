import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MessagesHelper } from '../helpers/messages.helper';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateVariationDto } from 'src/modules/variations/dto/update-variation.dto';

export class UpdateProductDto {

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
  @IsString()
  imgUrl: Array<number>;

  @ApiProperty()
  @IsNotEmpty({ message: MessagesHelper.CATEGORYID_REQUIRED })
  @IsNumber()
  categoryId: number;

  @ApiProperty({ type: [UpdateVariationDto] })
  @IsArray()
  @ArrayMinSize(1, { message: MessagesHelper.CATEGORYID_REQUIRED })
  @ValidateNested({ each: true })
  @Type(() => UpdateVariationDto)
  variations: UpdateVariationDto[];
}
