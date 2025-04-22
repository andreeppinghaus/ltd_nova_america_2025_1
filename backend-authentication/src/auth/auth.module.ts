import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BcryptService } from './hashing/bcrypt.service';
import { HashingService } from './hashing/hashing.service';

@Global() //pode ser usado sem importar
@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService

    },
    AuthService
  ],
  exports: [HashingService]
})
export class AuthModule { }
