import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [
    ConfigModule.forRoot
      ({ isGlobal: true }),
    AuthModule,
    HttpModule
  ],
  providers: [],
})
export class AppModule { }
