import { ApiProperty } from '@nestjs/swagger';
import { AttendanceStatus } from 'src/enums/attendance-status.enum';

export class CreateAttendanceDto {
  @ApiProperty()
  student_cpf: number;

  @ApiProperty()
  class_day_id: number;

  @ApiProperty({ enum: AttendanceStatus })
  status: AttendanceStatus;
}
