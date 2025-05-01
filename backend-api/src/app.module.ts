import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendancesModule } from './attendances/attendances.module';
import { ClassGroupsModule } from './class-groups/class-groups.module';
import { ClassDaysModule } from './class-days/class-days.module';
import { StudentsModule } from './students/students.module';
import { UnitsModule } from './units/units.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: 5432,
      username: process.env.API_PG_USER,
      password: process.env.API_PG_PASS,
      database: process.env.API_PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UnitsModule,
    ClassGroupsModule,
    StudentsModule,
    ClassDaysModule,
    AttendancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
