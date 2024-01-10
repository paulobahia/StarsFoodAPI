import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from '../repository/products.repository';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { MessagesHelper } from '../helpers/messages.helper';
import { MessagesHelper as VariationMessagesHelper } from '../../variations/helpers/messages.helper'
import { VariationsService } from 'src/modules/variations/services/variations.service';
import { UpdateProductDto } from '../dto/update-product.dto';
import { VariationsRepository } from 'src/modules/variations/repository/variations.repository';
import { HandleStatusProductDto } from '../dto/handle-status-product.dto';
import { ProductImagesRepository } from 'src/modules/product-images/repository/product-images.repository';

@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository, private readonly variationsService: VariationsService, private readonly variationsRepository: VariationsRepository, private readonly productImagesRepository: ProductImagesRepository) { }

    async findUnique(RestaurantId: string, ProductId: string): Promise<ProductEntity | null> {
        const Product = await this.productsRepository.findUnique(RestaurantId, ProductId)

        if (Product == null) {
            throw new NotFoundException(MessagesHelper.PRODUCTS_NOT_FOUND)
        }

        return Product
    }

    async findAll(RestaurantId: string): Promise<ProductEntity[] | null> {
        const Products = await this.productsRepository.findAll(RestaurantId)

        if (Products == null) {
            throw new NotFoundException(MessagesHelper.PRODUCTS_NOT_FOUND)
        }

        return Products
    }

    async create(RestaurantId: string, data: CreateProductDto) {
        try {
            const Product = await this.productsRepository.create(RestaurantId, data)

            if (Product == null) {
                throw new BadRequestException(MessagesHelper.ERRO_CREATE_PRODUCT)
            }

            await this.productImagesRepository.createMany(RestaurantId, Product.Id, data.imgUrl)

            const Variation = await this.variationsService.create(RestaurantId, Product.Id, data.variations)

            if (Variation == null) {
                throw new BadRequestException(MessagesHelper.ERRO_CREATE_PRODUCT)
            }

        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async update(RestaurantId: string, ProductId: string, data: UpdateProductDto) {
        try {
            const existingVariations = await this.productsRepository.findVariationsByProductId(RestaurantId, ProductId)

            if (existingVariations == null) {
                throw new BadRequestException(VariationMessagesHelper.VARIATION_NOT_FOUND)
            }

            const variationsToRemove = existingVariations!.filter((variation) =>
                data.variations.every((newVariation) => newVariation.id !== variation.Id)
            );

            await this.variationsRepository.inactivateVariation(variationsToRemove)

            await Promise.all(
                data.variations.map(async (newVariation) => {
                    const existingVariation = existingVariations.find(
                        (variation) => variation.Id === newVariation.id
                    );
                    if (existingVariation) {
                        const VariationId = existingVariation.Id
                        await this.variationsRepository.update(RestaurantId, VariationId, newVariation)
                    } else {
                        await this.variationsRepository.create(RestaurantId, ProductId, newVariation)
                    }
                })
            )

            await this.productsRepository.update(RestaurantId, ProductId, data)

        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async handleStatus(RestaurantId: string, ProductId: string, data: HandleStatusProductDto) {
        try {
            const Product = await this.productsRepository.findUnique(RestaurantId, ProductId)

            if (Product == null) {
                throw new NotFoundException(MessagesHelper.PRODUCT_NOT_FOUND)
            }

            await this.productsRepository.handleStatus(RestaurantId, ProductId, data)
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async remove(RestaurantId: string, ProductId: string) {
        try {
            const Product = await this.productsRepository.findUnique(RestaurantId, ProductId)

            if (Product == null) {
                throw new NotFoundException(MessagesHelper.PRODUCT_NOT_FOUND)
            }

            await this.productsRepository.delete(RestaurantId, ProductId)
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}
