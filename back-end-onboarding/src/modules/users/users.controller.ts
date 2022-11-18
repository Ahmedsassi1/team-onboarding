import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/modules/users/dto/users.dto';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/decorators/roles/roles.decorator';
import { Role } from 'src/auth/strategy/role/role.enum';
import { RolesGuard } from 'src/common/guards/Roles.guard';

@Controller('users')
@Roles(Role.USER)
@UseGuards(RolesGuard)
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  addUser(@Body() body: UserDto) {
    this.service.addUser(body);
  }

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get('/:id')
  getOneUser(@Param('id') id: string) {
    return this.service.getOneUser(id);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UserDto) {
    return this.service.updateUser(id, body);
  }

  @Delete('/:id')
  deleteBrand(@Param('id') id: string) {
    return this.service.deleteUser(id);
  }
}
