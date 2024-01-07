import { Variation } from '@/domain/enterprise/entities/variations'

export class VariationPresenter {
    static toHTTP(variation: Variation) {
        return {
            id: variation.id.toValue(),
            name: variation.name,
            value: variation.value,
            createdTime: variation.createdTime,
            updateTime: variation.updateTime,
            productId: variation.productId.toValue(),
            restaurantId: variation.restaurantId.toValue(),
            active: variation.active,
        }
    }
}
