import { Injectable, BadRequestException } from '@nestjs/common';
import { StarFoodPrismaService } from '../../prisma/services/star-food.prisma.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { HandleStatusProductDto } from '../dto/handle-status-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findUnique(RestaurantId: string, ProductId: string): Promise<ProductEntity | null> {
        try {
            return await this.prisma.products.findUnique({
                where: { RestaurantId: parseInt(RestaurantId, 10), Id: parseInt(ProductId, 10), Active: true },
                include: {
                    Categories: true,
                    Variations: true,
                    ProductImages: true
                }
            }) as ProductEntity | null
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findAll(RestaurantId: string): Promise<ProductEntity[] | null> {
        try {
            const products = await this.prisma.products.findMany({
                where: { RestaurantId: parseInt(RestaurantId), Active: true },
                include: {
                    Categories: {
                        select: {
                            Id: true,
                            Name: true,
                        }
                    },
                    Restaurant: {
                        select: {
                            Id: true,
                            Name: true
                        }
                    }
                },
                orderBy: {
                    CreatedTime: 'desc'
                }
            })
            return products as ProductEntity[] | null
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findVariationsByProductId(RestaurantId: string, ProductId: string) {
        try {
            const VariationsByProductId = await this.prisma.products.findUnique({
                where: { Id: parseInt(ProductId, 10), RestaurantId: parseInt(RestaurantId, 10) },
                include: { Variations: true }
            })

            return VariationsByProductId?.Variations
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async findValidsProductsByVariationIds(RestaurantId: string, VariationIds: number[]) {
        return this.prisma.products.findMany({
            where: {
                RestaurantId: parseInt(RestaurantId, 10),
                Variations: {
                    some: {
                        Id: {
                            in: VariationIds
                        }
                    }
                },
                Status: true,
            },
        });
    }

    async update(RestaurantId: string, ProductId: string, data: UpdateProductDto) {
        try {
            return await this.prisma.products.update({
                where: { RestaurantId: parseInt(RestaurantId, 10), Id: parseInt(ProductId, 10) },
                data: {
                    Name: data.name,
                    Description: data.description,
                    CategoryId: data.categoryId
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async create(RestaurantId: string, data: CreateProductDto) {
        const { name, description, categoryId } = data
        try {
            return await this.prisma.products.create({
                data: {
                    Name: name,
                    Description: description,
                    CategoryId: categoryId,
                    RestaurantId: parseInt(RestaurantId, 10),
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async handleStatus(RestaurantId: string, ProductId: string, data: HandleStatusProductDto) {
        try {
            const { status } = data
            return await this.prisma.products.update({
                where: { Id: parseInt(ProductId, 10), RestaurantId: parseInt(RestaurantId, 10) },
                data: {
                    Status: status
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async delete(RestaurantId: string, ProductId: string) {
        await this.prisma.products.update({
            where: { Id: parseInt(ProductId, 10), RestaurantId: parseInt(RestaurantId, 10) },
            data: {
                Active: false
            }
        })
    }
}