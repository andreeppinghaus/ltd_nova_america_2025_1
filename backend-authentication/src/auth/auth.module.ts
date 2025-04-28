import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BcryptService } from './hashing/bcrypt.service';
import { HashingService } from './hashing/hashing.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { usersProviders } from 'src/users/users.providers';

@Global() //pode ser usado sem importar
@Module({
  imports: [UsersModule],
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
