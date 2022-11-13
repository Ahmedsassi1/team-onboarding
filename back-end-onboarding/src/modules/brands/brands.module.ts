import { Module } from '@nestjs/common';
import { Brand } from 'src/Database/brands.entity';
import { BrandController } from './brands.controller';
import { BrandsService } from './brands.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandsService],
})
export class BrandsModule {}
