import { Injectable } from "@nestjs/common";
import { StarFoodPrismaService } from "../../../shared/database/star-food.prisma.service";
import { ProductQuery } from "src/product/application/query/product/product.query";
import { FindProductsResult } from "src/product/application/query/product/find-products.result";
import { ProductMapper } from "../mappers/product.mapper";
import { FindProductByIdResult } from "src/product/application/query/product/find-product-by-id.result";

@Injectable()
export class ProductQueryImplement implements ProductQuery {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async find(restaurantId: number): Promise<FindProductsResult> {

        const products = await this.prisma.products.findMany({
            where: {
                RestaurantId: restaurantId,
                Active: true
            },
            include: {
                Variations: true,
                Categories: true
            }
        })
        return { products: products.map(ProductMapper.toDomain) }
    }

    async findById(id: number, restaurantId: number): Promise<FindProductByIdResult | null> {

        const product = await this.prisma.products.findUnique({
            where: {
                Id: id,
                RestaurantId: restaurantId,
                Active: true
            },
            include: {
                Variations: true,
                Categories: true
            }
        })

        if (!product) {
            return null
        }

        return ProductMapper.toDomain(product)
    }
}