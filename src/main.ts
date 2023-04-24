import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

const DEFAULT_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const configService = app.get(ConfigService);

  const globalPrefix = configService.get('CONTEXT_PATH');
  const port = configService.get('PORT');

  if (globalPrefix) {
    app.setGlobalPrefix(globalPrefix);
  }

  if (configService.get('NODE_ENV') !== 'production') {
    const config = new DocumentBuilder().setTitle('Numbers service').build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(port ?? DEFAULT_PORT);
}
bootstrap();
