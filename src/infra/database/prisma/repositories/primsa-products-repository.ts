import { StarFoodPrismaService } from "../star-food.prisma.service";
import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "@/domain/application/repositores/products-repository";
import { Product } from "@/domain/enterprise/entities/product";
import { Products as PrismaProduct } from '@prisma/client'
import { PrismaProductMapper } from "../mappers/prisma-product-mapper";
import { PrismaVariationMapper } from "../mappers/prisma-variation-mapper";
import { Variation } from "@/domain/enterprise/entities/variations";

@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
    constructor(private prisma: StarFoodPrismaService) { }

    async findMany(restaurantId: number): Promise<Product[]> {
        const products = await this.prisma.products.findMany({
            where: {
                RestaurantId: restaurantId
            },
            include: {
                Categories: true,
                Variations: true
            },
            orderBy: {
                CreatedTime: 'desc'
            }
        })

        return products.map(PrismaProductMapper.toDomain)
    }

    async findById(productId: number, restaurantId: number): Promise<Product | null> {
        const product = await this.prisma.products.findUnique({
            where: {
                Id: productId,
                RestaurantId: restaurantId
            },
            include: {
                Categories: true,
                Variations: true
            },
        })

        if (!product) {
            return null
        }

        return PrismaProductMapper.toDomain(product)
    }

    async findByCategoryId(categoryId: number, restaurantId: number): Promise<Product[]> {
        const products = await this.prisma.products.findMany({
            where: {
                RestaurantId: restaurantId,
                CategoryId: categoryId
            },
            include: {
                Categories: true,
                Variations: true
            },
        })

        return products.map(PrismaProductMapper.toDomain)
    }

    async findVariationByCategoryId(productId: number, restaurantId: number): Promise<Variation[] | null> {
        const products = await this.prisma.products.findUnique({
            where: { Id: productId, RestaurantId: restaurantId },
            include: {
                Categories: true,
                Variations: true
            },
        })

        if (!products?.Variations) {
            return null
        }

        return products.Variations.map(PrismaVariationMapper.toDomain)
    }

    async create(product: Product): Promise<PrismaProduct> {
        const data = PrismaProductMapper.toPrisma(product)

        return await this.prisma.products.create({
            data: {
                Name: data.Name,
                Description: data.Description,
                ImgUrl: data.ImgUrl,
                Categories: {
                    connect: { Id: data.CategoryId }
                },
                Restaurant: {
                    connect: { Id: data.RestaurantId }
                }
            }
        })
    }

    async update(product: Product, restaurantId: number): Promise<void> {
        const data = PrismaProductMapper.toPrisma(product)

        await this.prisma.products.update({
            where: { Id: product.id.toValue(), RestaurantId: restaurantId },
            data: {
                Name: data.Name,
                Description: data.Description,
                ImgUrl: data.ImgUrl,
                Categories: {
                    connect: { Id: data.CategoryId }
                }
            }
        })
    }

    async updateStatus(product: Product, restaurantId: number): Promise<void> {
        const data = PrismaProductMapper.toPrisma(product)

        await this.prisma.products.update({
            where: { Id: product.id.toValue(), RestaurantId: restaurantId },
            data: {
                Status: data.Status,
                UpdateTime: data.UpdateTime
            }
        })
    }

    async delete(productId: number, restaurantId: number): Promise<void> {
        await this.prisma.products.update({
            where: { Id: productId, RestaurantId: restaurantId },
            data: {
                Active: false
            }
        })
    }
}