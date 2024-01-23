import { Inject, Injectable } from "@nestjs/common";
import { Product } from "src/product/domain/product/product";
import { ProductFactory } from "src/product/domain/product/product.factory";
import { ProductRepository } from "src/product/domain/product/product.repository";
import { StarFoodPrismaService } from "../../../shared/database/star-food.prisma.service";
import { Prisma, Products as PrismaProducts } from "prisma/generated/StarFood";
import { ProductEntity } from "../entity/product.entity";

@Injectable()
export class ProductRepositoryImplement implements ProductRepository {
    @Inject() private readonly productFactory: ProductFactory;
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findById(id: number, restaurantId: number): Promise<Product | null> {
        const product = await this.prisma.products.findUnique({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            },
        })

        if (!product) {
            return null
        }

        return this.entityToModel(product)
    }

    async findByVariationsIds(variationIds: number[], restaurantId: number): Promise<PrismaProducts[] | null> {
        const product = await this.prisma.products.findMany({
            where: {
                RestaurantId: restaurantId,
                Variations: {
                    some: {
                        Id: {
                            in: variationIds
                        }
                    }
                },
                Status: true,
                Active: true
            },
        })

        if (!product) {
            return null
        }

        return product
    }

    async update(id: number, data: Product, restaurantId: number): Promise<void> {
        const product = this.modelToEntity(data)

        await this.prisma.products.update({
            where: {
                Id: id,
                RestaurantId: restaurantId
            },
            data: {
                Name: product.Name,
                Description: product.Description,
                ImgUrl: product.ImgUrl,
                CategoryId: product.CategoryId,
                UpdatedAt: new Date()
            }
        })
    }

    async updateStatus(id: number, status: boolean, restaurantId: number): Promise<void> {
        await this.prisma.products.update({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            },
            data: {
                Status: status
            }
        })
    }

    async create(data: Product): Promise<PrismaProducts> {
        const product = this.modelToEntity(data)

        return await this.prisma.products.create({
            data: {
                Restaurant: {
                    connect: {
                        Id: product.RestaurantId
                    }
                },
                Categories: {
                    connect: {
                        Id: product.CategoryId
                    }
                },
                Name: product.Name,
                Description: product.Description,
                ImgUrl: product.ImgUrl
            }
        })
    }

    async delete(id: number, restaurantId: number): Promise<void> {
        await this.prisma.products.update({
            where: {
                Id: id,
                RestaurantId: restaurantId
            },
            data: {
                Active: false,
                DeletedAt: new Date()
            }
        })
    }

    private modelToEntity(model: Product): Prisma.ProductsUncheckedCreateInput {
        const property = JSON.parse(JSON.stringify(model)) as ProductEntity;
        return {
            Name: property.name,
            RestaurantId: property.restaurantId,
            CategoryId: property.category.id,
            Description: property.description,
            ImgUrl: property.imgUrl as Prisma.InputJsonValue,
            Status: property.status
        }
    }

    private entityToModel(entity: PrismaProducts): Product {
        return this.productFactory.reconstitute({
            name: entity.Name,
            description: entity.Description,
            imgUrl: entity.ImgUrl,
            restaurantId: entity.RestaurantId,
            categoryId: entity.CategoryId,
            status: entity.Status,
            active: entity.Active,
            createdAt: entity.CreatedAt,
            updatedAt: entity.UpdatedAt,
            deletedAt: entity.DeletedAt,
        });
    }
}