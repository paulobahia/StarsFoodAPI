import { Prisma, Variations as PrismaVariation } from "@prisma/client";
import { Variation } from "@/domain/enterprise/entities/variations";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

export class PrismaVariationMapper {
    static toDomain(raw: PrismaVariation): Variation {
        return Variation.create({
            name: raw.Name,
            value: raw.Value,
            productId: new UniqueEntityID(raw.RestaurantId),
            restaurantId: new UniqueEntityID(raw.RestaurantId)
        },
            new UniqueEntityID(raw.Id)
        )
    }

    static toPrisma(variation: Variation): Prisma.VariationsUncheckedCreateInput {
        return {
            Name: variation.name,
            Value: variation.value,
            ProductId: variation.productId.toValue(),
            RestaurantId: variation.restaurantId.toValue()
        }
    }

}