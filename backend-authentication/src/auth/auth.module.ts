import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Global() //pode ser usado sem importar
@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
