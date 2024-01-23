import { AggregateRoot } from "@nestjs/cqrs";

export type CategoryEssentialProperties = Readonly<
    Required<{
        name: string;
        restaurantId: number;
    }>
>;

export type CategoryOptionalProperties = Readonly<
    Partial<{
        status: boolean;
        active: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type CategoryProperties = CategoryEssentialProperties & Required<CategoryOptionalProperties>;

export interface Category {
    updateName(name: string): void
}

export class CategoryImplement extends AggregateRoot implements Category {
    private name: string
    private readonly restaurantId: number
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;
    private status: boolean;
    private active: boolean;

    constructor(properties: CategoryProperties) {
        super();
        Object.assign(this, properties);
    }

    updateName(name: string): void {
        this.name = name;
        this.updatedAt = new Date();
    }
}