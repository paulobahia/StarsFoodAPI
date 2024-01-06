import { Category } from '@/domain/enterprise/entities/category'

export class CategoryPresenter {
    static toHTTP(category: Category) {
        return {
            id: category.id.toValue(),
            name: category.name,
            createdTime: category.createdTime,
            updateTime: category.updateTime,
            restaurantId: category.restaurantId.toValue(),
            status: category.status,
            active: category.active,
        }
    }
}
