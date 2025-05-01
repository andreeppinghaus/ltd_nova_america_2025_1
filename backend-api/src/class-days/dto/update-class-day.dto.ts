import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDayDto } from './create-class-day.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ClassDayStatus } from 'src/enums/class-day-status.enum';

export class UpdateClassDayDto extends PartialType(CreateClassDayDto) {
  @ApiProperty({ required: false })
  content?: string;

  @ApiProperty({ enum: ClassDayStatus, required: false })
  status?: ClassDayStatus;
}
