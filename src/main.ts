import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure Swagger options
  const config = new DocumentBuilder()
    .setTitle('My NestJS API')
    .setDescription('API documentation for my NestJS app')
    .setVersion('1.0')
    .addTag('users') // Optional: Tag endpoints for organization
    .build();

  // Create Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Serve Swagger UI at /api
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
