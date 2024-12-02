import { NestFactory } from '@nestjs/core';
import { AppModule } from 'apps/server/src/app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  console.log('User Role Definition Worker started.');
}

bootstrap();
