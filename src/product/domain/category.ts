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
        createdTime: Date;
        updatedTime: Date;
    }>
>;

export type CategoryProperties = CategoryEssentialProperties & Required<CategoryOptionalProperties>;

export interface Category {
    updateName(name: string): void
}

export class CategoryImplement extends AggregateRoot implements Category {
    private name: string
    private readonly restaurantId: number
    private createdTime: Date;
    private updatedTime: Date;
    private status: boolean;
    private active: boolean;

    constructor(properties: CategoryProperties) {
        super();
        Object.assign(this, properties);
    }

    updateName(name: string): void {
        this.name = name;
        this.updatedTime = new Date();
    }
}