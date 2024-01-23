import { User, UserProperties, UserImplement } from "./user";

type CreateUserOptions = Readonly<{
    name: string;
    email: string;
    password: string;
    gender: string;
    role: string;
    imgPath: string;
    birthDate: Date;
    restaurantId: number;
}>;

export class UserFactory {

    create(options: CreateUserOptions): User {
        return new UserImplement({
            ...options,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
            active: true
        })
    }

    reconstitute(properties: UserProperties): User {
        return new UserImplement(properties)
    }
}