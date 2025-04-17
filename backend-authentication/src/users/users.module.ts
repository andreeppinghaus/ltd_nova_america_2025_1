import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
