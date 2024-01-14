import { SetMetadata } from '@nestjs/common';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);

export const RestaurantId = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        return request.user.restaurantId;
    },
);

export const InstanceId = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        return request.user.sub;
    },
);