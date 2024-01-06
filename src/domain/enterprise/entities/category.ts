import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { AggregateRoot } from "src/core/entities/aggregate-root"
import { Optional } from '@/core/types/optional'

export interface CategoryProps {
    name: string
    restaurantId: UniqueEntityID
    createdTime: Date
    updateTime: Date
    status: boolean
    active: boolean
}

export class Category extends AggregateRoot<CategoryProps> {

    get name() {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
        this.touch()
    }

    get restaurantId() {
        return this.props.restaurantId
    }

    get createdTime() {
        return this.props.createdTime
    }

    get updateTime() {
        return this.props.updateTime
    }

    get status() {
        return this.props.status
    }

    set status(status: boolean) {
        this.props.status = status
        this.touch()
    }

    get active() {
        return this.props.active
    }

    private touch() {
        this.props.updateTime = new Date()
    }

    static create(
        props: Optional<CategoryProps, 'active' | 'status' | 'createdTime' | 'updateTime'>,
        id?: UniqueEntityID,
    ) {
        const category = new Category(
            {
                ...props,
                createdTime: props.createdTime ?? new Date(),
                updateTime: props.updateTime ?? new Date(),
                status: props.status ?? false,
                active: props.active ?? true
            }, id!)
        return category
    }
}