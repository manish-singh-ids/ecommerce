import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin: '*', // You can replace '*' with a specific domain, e.g. 'http://localhost:3000'
    // methods: 'GET, POST, PUT, DELETE', // Allowed methods
    // allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
