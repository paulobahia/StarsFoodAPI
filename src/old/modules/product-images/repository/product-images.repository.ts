import { BadRequestException, Injectable } from "@nestjs/common";
import { StarFoodPrismaService } from "src/modules/prisma/services/star-food.prisma.service";

@Injectable()
export class ProductImagesRepository {
    constructor(private readonly prisma: StarFoodPrismaService) { }

    async findAll(RestaurantId: string,) {

    }

    async findByProductId(RestaurantId: string, ProductId: number) {
        try {
            return await this.prisma.productImages.findMany({
                where: { Id: ProductId, RestaurantId: parseInt(RestaurantId, 10) },
                select: {
                    ImagePath: true
                }
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }

    async createMany(RestaurantId: string, ProductId: number, Images: string[]) {
        try {
            await this.prisma.productImages.createMany({
                data: Images.map((image) => ({
                    ProductId: ProductId,
                    ImagePath: image,
                    RestaurantId: parseInt(RestaurantId, 10)
                }))
            })
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}