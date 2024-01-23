import { AggregateRoot } from "@nestjs/cqrs";

export type UserEssentialProperties = Readonly<
    Required<{
        name: string;
        email: string;
        password: string;
        gender: string;
        role: string;
        imgPath: string;
        birthDate: Date;
        restaurantId: number;
    }>
>;

export type UserOptionalProperties = Readonly<
    Partial<{
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type UserProperties = UserEssentialProperties & Required<UserOptionalProperties>;

export interface User {
}

export class UserImplement extends AggregateRoot implements User {
    private name: string
    private readonly email: string
    private imgPath: string
    private password: string
    private gender: string
    private role: string
    private readonly restaurantId: number
    private birthDate: Date;
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;
    private active: boolean;

    constructor(properties: UserProperties) {
        super();
        Object.assign(this, properties);
    }
}