import { AggregateRoot } from "@/core/entities/aggregate-root"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

export interface VariationProps {
    name: string
    value: string
    createdTime: Date
    updateTime: Date
    productId: UniqueEntityID
    restaurantId: UniqueEntityID
    active: boolean
}

export class Variation extends AggregateRoot<VariationProps> {

    get name() {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
        this.touch()
    }

    get value() {
        return this.props.value
    }

    set value(value: string) {
        this.props.value = value
        this.touch()
    }

    get productId() {
        return this.props.productId
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

    get active() {
        return this.props.active
    }

    private touch() {
        this.props.updateTime = new Date()
    }

    static create(
        props: Optional<VariationProps, 'active' | 'createdTime' | 'updateTime'>,
        id?: UniqueEntityID,
    ) {
        const variation = new Variation(
            {
                ...props,
                createdTime: props.createdTime ?? new Date(),
                updateTime: props.updateTime ?? new Date(),
                active: props.active ?? true
            }, id!)
        return variation
    }
}