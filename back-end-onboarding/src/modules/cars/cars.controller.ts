import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';


@Controller('users')
export class CarsController {
  constructor(private readonly usersService: CarsService) {}

  @Post('add')
  create(@Body() createUser: any) {
    return this.usersService.create(createUser);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUser: any) {
    return this.usersService.update(+id, updateUser);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}