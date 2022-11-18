import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { ROLES_KEY } from 'src/auth/decorators/roles/roles.decorator';
import { Role } from 'src/auth/strategy/role/role.enum';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();

    let decoded = jwt_decode(request.headers.authorization);
    const user = await this.usersService.getOneUser(decoded['sub']);
    console.log('aaaaaaaaaaaaaaa', user['role'], requiredRoles);
    const verified = requiredRoles.some((role) => user.role?.includes(role));
    if (verified) {
      return true;
    }
  }
}
