import { PartialType } from '@nestjs/mapped-types';
import { CreateAttendanceDto } from './create-attendance.dto';
import { ApiProperty } from '@nestjs/swagger';
import { AttendanceStatus } from 'src/enums/attendance-status.enum';

export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto) {
  @ApiProperty({ enum: AttendanceStatus, required: false })
  status?: AttendanceStatus;
}
