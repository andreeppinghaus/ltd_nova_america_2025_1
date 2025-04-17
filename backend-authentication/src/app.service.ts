import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private readonly userService: UsersService) {}

  getHello(): string {
    return 'Hello World! backend-authentication';
  }
}
