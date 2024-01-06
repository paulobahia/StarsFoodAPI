import { createParamDecorator, ExecutionContext } from '@nestjs/common';

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