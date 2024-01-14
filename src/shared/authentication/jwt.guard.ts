import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from './jwt-strategy';
import { IS_PUBLIC_KEY } from 'src/utils/decorators';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private readonly jwtStrategy: JwtStrategy, private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.get<boolean>(IS_PUBLIC_KEY, context.getHandler());
        if (isPublic) {
            return true;
        }

        return super.canActivate(context);
    }

    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}
