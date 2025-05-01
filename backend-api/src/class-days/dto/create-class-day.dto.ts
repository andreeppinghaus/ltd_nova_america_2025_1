import { ApiProperty } from '@nestjs/swagger';
import { ClassDayStatus } from 'src/enums/class-day-status.enum';

export class CreateClassDayDto {
  @ApiProperty({ type: Number })
  class_group_id: number;

  @ApiProperty({ type: String, format: 'date' })
  date: string;

  @ApiProperty()
  content: string;

  @ApiProperty({ enum: ClassDayStatus, default: ClassDayStatus.DRAFT })
  status: ClassDayStatus;
}
