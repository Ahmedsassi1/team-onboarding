import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { BrandsModule } from './modules/brands/brands.module';
import { CarsModule } from './modules/cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BrandController } from './modules/brands/brands.controller';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'onboarding',
        entities: [__dirname + '/Database/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    BrandsModule,
    CarsModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
