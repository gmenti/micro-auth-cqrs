import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './module';
import { ValidationPipe } from '@nestjs/common';

setImmediate(async () => {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
});
