import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carservice: CarsService) {}

  @Post('add')
  create(@Body() createCar: any) {
    return this.carservice.create(createCar);
  }

  @Get('all')
  findAll() {
    return this.carservice.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.carservice.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateCar: any) {
    return this.carservice.update(+id, updateCar);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.carservice.remove(+id);
  }
}
