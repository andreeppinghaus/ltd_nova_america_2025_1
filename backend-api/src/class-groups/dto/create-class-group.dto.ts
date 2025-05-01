import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateClassGroupDto {
  @ApiProperty({ type: String, format: 'date' })
  start_date: string;

  @ApiProperty({ type: String, format: 'date' })
  end_date: string;

  @ApiProperty({ type: String, format: 'time', example: '08:00:00' })
  start_time: string;

  @ApiProperty({ type: String, format: 'time', example: '08:00:00' })
  end_time: string;

  @ApiProperty()
  @Length(7)
  week_day: string;

  @ApiProperty()
  unit_id: number;

  @ApiProperty()
  teacher_id: number;
}
