import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Backend-authentication - atualzando em tempo real';
  }
}
