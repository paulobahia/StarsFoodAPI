import { AggregateRoot } from "@/core/entities/aggregate-root"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

export interface RestaurantProps {
    name: string
    restaurantId: number
    active: boolean
}

export class Restaurant extends AggregateRoot<RestaurantProps> {

    get name() {
        return this.props.name
    }

    get restaurantId() {
        return this.props.restaurantId
    }

    get active() {
        return this.props.active
    }
    static create(
        props: Optional<RestaurantProps, 'active'>,
        id?: UniqueEntityID,
    ) {
        const category = new Restaurant(
            {
                ...props,
                active: props.active ?? true
            }, id!)
        return category
    }
}