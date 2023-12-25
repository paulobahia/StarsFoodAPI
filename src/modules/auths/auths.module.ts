import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt/jwt-strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
  ],
  providers: [JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthsModule { }
