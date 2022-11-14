import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
    return this.usersService.findOne(id);
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
