import { PartialType } from '@nestjs/mapped-types';
import { CreateClassGroupDto } from './create-class-group.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClassGroupDto extends PartialType(CreateClassGroupDto) {
  @ApiProperty({ type: String, format: 'date' })
  start_date?: string;

  @ApiProperty({ type: String, format: 'date' })
  end_date?: string;

  @ApiProperty({ type: String, format: 'time' })
  start_time?: string;

  @ApiProperty({ type: String, format: 'time' })
  end_time?: string;

  @ApiProperty()
  week_day?: string;

  @ApiProperty()
  unit_id?: number;

  @ApiProperty()
  teacher_id?: number;
}
