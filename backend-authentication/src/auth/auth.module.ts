import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BcryptService } from './hashing/bcrypt.service';

@Global() //pode ser usado sem importar
@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    BcryptService
  ],
})
export class AuthModule { }
