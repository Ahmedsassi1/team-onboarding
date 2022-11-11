import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { BrandsModule } from './modules/brands/brands.module';
import { CarsModule } from './modules/cars/cars.module';


@Module({
  imports: [    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'onBording',
    models: [],
  }), UsersModule, BrandsModule, CarsModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
