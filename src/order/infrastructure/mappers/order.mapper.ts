import { Prisma } from "prisma/generated/StarFood"
import { OrderEntity } from "../entity/order.entity"

type PrismaOrder = Prisma.OrderGetPayload<{
    include: {
        Table: true,
        Restaurant: true,
        OrderProducts: {
            include: {
                Variation: { include: { Products: true } }
            }
        }
    }
}>

export class OrderMapper {
    static toDomain(raw: PrismaOrder): OrderEntity {
        return {
            id: raw.Id,
            status: raw.Status,
            paid: raw.Paid,
            orderProducts: raw.OrderProducts.map((item) => ({
                id: item.Id,
                productName: item.Variation.Products.Name,
                productId: item.Variation.ProductId,
                productImg: item.Variation.Products.ImgUrl as Array<string>,
                quantity: item.Quantity,
                value: item.Variation.Value
            })),
            user: {
                id: raw.UserId,
                name: "",
                imgPath: ""
            },
            restaurantId: raw.RestaurantId,
            tableId: raw.TableId,
            active: raw.Active,
            createdAt: raw.CreatedAt,
            updatedAt: raw.UpdatedAt,
            deletedAt: raw.DeletedAt,
        }
    }

    // static toPrisma(table: OrderEntity): Prisma.OrderUncheckedCreateInput {
    //     return {

    //     }
    // }
}