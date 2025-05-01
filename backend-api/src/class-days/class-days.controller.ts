import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ClassDaysService } from './class-days.service';
import { CreateClassDayDto } from './dto/create-class-day.dto';
import { UpdateClassDayDto } from './dto/update-class-day.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { GetClassesQueryDto } from './dto/get-class-day.dto';
import { API_MESSAGES } from '../app.messages';

@Controller('class-days')
export class ClassDaysController {
  constructor(private readonly classDaysService: ClassDaysService) {}

  @Post()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_DAYS.CREATE })
  create(@Body() createClassDayDto: CreateClassDayDto) {
    return this.classDaysService.create(createClassDayDto);
  }

  @Get()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_DAYS.GET })
  get(@Query() query: GetClassesQueryDto) {
    return this.classDaysService.findClasses(query);
  }

  @Patch()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_DAYS.UPDATE })
  @ApiQuery({ name: 'id', required: true, type: String })
  update(
    @Query('id') id: string,
    @Query() updateClassDayDto: UpdateClassDayDto,
  ) {
    return this.classDaysService.update(+id, updateClassDayDto);
  }

  @Delete()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_DAYS.DELETE })
  remove(@Query('id') id: string) {
    return this.classDaysService.remove(+id);
  }
}
