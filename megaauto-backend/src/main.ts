import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swager api documentation 

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description for your NestJS application')
    .setVersion('1.0')
    .addTag('Mega Auto Auction')  // Add tags if needed
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);  // Set up Swagger at /api-docs



  await app.listen(3000);
}
bootstrap();
