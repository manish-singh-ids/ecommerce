import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product/product.module';
import { Product } from 'models/product/product.model';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'password1234',
      database: process.env.DB_NAME || 'ecommerce',
      models: [Product],
      autoLoadModels: true,
      synchronize: true, 
    }),
    ProductModule,
  ],
})
export class AppModule {}
