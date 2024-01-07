import { AggregateRoot } from "@/core/entities/aggregate-root";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";
import { Category } from "./category";
import { VariationProps } from "./variations";

export interface ProductProps {
    name: string
    description: string
    imgUrl: string[]
    variation: Array<VariationProps>
    createdTime: Date
    updateTime: Date
    restaurantId: UniqueEntityID
    categoryId: UniqueEntityID
    category: Category
    status: boolean
    active: boolean
}

export class Product extends AggregateRoot<ProductProps> {

    get name() {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
        this.touch()
    }

    get description() {
        return this.props.description
    }

    set description(description: string) {
        this.props.description = description
        this.touch()
    }

    get imgUrl() {
        return this.props.imgUrl
    }

    set imgUrl(imgUrl: Array<string>) {
        this.props.imgUrl = imgUrl
        this.touch()
    }

    get variation() {
        return this.props.variation
    }

    set variation(variation: Array<VariationProps>) {
        this.props.variation = variation
        this.touch()
    }

    get restaurantId() {
        return this.props.restaurantId
    }

    get category() {
        return this.props.category
    }

    get categoryId() {
        return this.props.categoryId
    }

    set categoryId(categoryId: UniqueEntityID) {
        this.props.categoryId = categoryId
        this.touch()
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
        props: Optional<ProductProps, 'active' | 'status' | 'category' | 'variation' | 'createdTime' | 'updateTime'>,
        id?: UniqueEntityID,
    ) {
        const product = new Product(
            {
                ...props,
                variation: props.variation ?? [],
                category: props.category!,
                createdTime: props.createdTime ?? new Date(),
                updateTime: props.updateTime ?? new Date(),
                status: props.status ?? false,
                active: props.active ?? true
            }, id!)
        return product
    }
}