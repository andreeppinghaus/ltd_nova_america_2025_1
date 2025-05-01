import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { API_MESSAGES } from '../app.messages';

@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.ATTENDANCES.CREATE })
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendancesService.create(createAttendanceDto);
  }

  @Get()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.ATTENDANCES.GET })
  @ApiQuery({ name: 'cpf', required: false, type: String })
  @ApiQuery({ name: 'class_day', required: false, type: String })
  findOne(@Query('cpf') cpf: string, @Query('class_day') class_day: string) {
    if (cpf && class_day) {
      const convertedDate = new Date(class_day);
      return this.attendancesService.findByStudentCpfAndClassDay(
        +cpf,
        convertedDate,
      );
    } else if (class_day && !cpf) {
      const convertedDate = new Date(class_day);
      return this.attendancesService.findByClassDay(convertedDate);
    } else if (cpf && !class_day) {
      return this.attendancesService.findByStudentId(+cpf);
    } else {
      return API_MESSAGES.ERRORS.INVALID_INPUT;
    }
  }

  @Patch()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.ATTENDANCES.UPDATE })
  @ApiQuery({ name: 'cpf', required: true, type: String })
  @ApiQuery({ name: 'class_day', required: true, type: String })
  update(
    @Query('cpf') cpf: string,
    @Query('class_day') class_day: string,
    @Query() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return this.attendancesService.update(+cpf, updateAttendanceDto);
  }

  @Delete()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.ATTENDANCES.DELETE })
  remove(@Query('id') id: string) {
    return this.attendancesService.remove(+id);
  }
}
