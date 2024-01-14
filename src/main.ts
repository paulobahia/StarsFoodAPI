import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ credentials: true, origin: 'http://localhost:8000' })
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Stars Food API')
    .setDescription('API para gerenciar os produtos e pedidos do seu restaurante.')
    .setVersion('1.0')
    .addTag('endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(5002);
}
bootstrap();
