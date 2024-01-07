import { Product } from '@/domain/enterprise/entities/product'
import { CategoryPresenter } from './category-presenter'
import { Variation } from '@/domain/enterprise/entities/variations'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { VariationPresenter } from './variation-presenter'

export class ProductPresenter {
    static toHTTP(product: Product) {

        const Variations = product.variation.map((variation: Variation) => {
            return VariationPresenter.toHTTP(
                Variation.create(
                    {
                        name: variation.name,
                        value: variation.value,
                        productId: new UniqueEntityID(product.id.toValue()),
                        restaurantId: new UniqueEntityID(product.restaurantId.toValue())
                    },
                    variation.id
                )
            )
        })

        return {
            id: product.id.toValue(),
            name: product.name,
            description: product.description,
            createdTime: product.createdTime,
            updateTime: product.updateTime,
            categoryId: product.categoryId.toValue(),
            categories: CategoryPresenter.toHTTP(product.category),
            variation: Variations,
            restaurantId: product.restaurantId.toValue(),
            status: product.status,
            active: product.active,
        }
    }
}
