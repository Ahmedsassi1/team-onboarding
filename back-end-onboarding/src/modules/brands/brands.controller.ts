import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { BrandInterface, BrandsService } from './brands.service';

@Controller('brand')
export class BrandController {
  constructor(private readonly barndService: BrandsService) {}

  @Post('add')
  create(@Body() createCar: BrandInterface) {
    return this.barndService.create(createCar);
  }

  @Get('all')
  findAll() {
    return this.barndService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.barndService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBrand: any) {
    return this.barndService.update(+id, updateBrand);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.barndService.remove(+id);
  }
}
