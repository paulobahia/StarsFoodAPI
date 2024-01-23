import { User } from "prisma/generated/IdentityServer"
import { UserEntity } from "../entity/user.entity"

export class UserMapper {
    static toDomain(raw: User): UserEntity {
        return {
            id: raw.Id,
            name: raw.Name,
            email: raw.Email,
            imgPath: raw.ImgPath,
            birthDate: raw.BirthDate,
            gender: raw.Gender,
            role: raw.Role,
            restaurantId: raw.RestaurantId,
            createdAt: raw.CreatedAt,
            updatedAt: raw.CreatedAt,
        }
    }
}