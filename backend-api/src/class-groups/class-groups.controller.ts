import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ClassGroupsService } from './class-groups.service';
import { CreateClassGroupDto } from './dto/create-class-group.dto';
import { UpdateClassGroupDto } from './dto/update-class-group.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { API_MESSAGES } from '../app.messages';

@Controller('class-groups')
export class ClassGroupsController {
  constructor(private readonly classGroupsService: ClassGroupsService) {}

  @Post()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_GROUPS.CREATE })
  create(@Body() createClassGroupDto: CreateClassGroupDto) {
    return this.classGroupsService.create(createClassGroupDto);
  }

  @Get()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_GROUPS.GET_ALL })
  @ApiQuery({ name: 'id', required: false, type: String, description: API_MESSAGES.PARAMETERS.CLASS_GROUP_ID })
  find(@Query('id') id: string) {
    if (id) {
      return this.classGroupsService.findOne(+id);
    }
    return this.classGroupsService.findAll();
  }

  @Patch()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_GROUPS.UPDATE })
  @ApiQuery({ name: 'id', required: true, type: String, description: API_MESSAGES.PARAMETERS.CLASS_GROUP_ID })
  update(
    @Query('id') id: string,
    @Body() updateClassGroupDto: UpdateClassGroupDto,
  ) {
    return this.classGroupsService.update(+id, updateClassGroupDto);
  }

  @Delete()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.CLASS_GROUPS.DELETE })
  @ApiQuery({ name: 'id', required: true, type: String, description: API_MESSAGES.PARAMETERS.CLASS_GROUP_ID })
  remove(@Query('id') id: string) {
    return this.classGroupsService.remove(+id);
  }
}
