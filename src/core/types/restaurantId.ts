import { ZodValidationPipe } from 'src/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'

const restaurantIdSchema = z
    .number()
    .pipe(z.number())

export const RestaurantIdValidationPipe = new ZodValidationPipe(restaurantIdSchema)