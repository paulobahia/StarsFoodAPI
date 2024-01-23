import { IQueryResult } from "@nestjs/cqrs";

export class FindUserByIdResult implements IQueryResult {
    readonly id: number;
    readonly name: string;
    readonly imgPath: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}