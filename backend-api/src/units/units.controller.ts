import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UnitsService } from './units.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { API_MESSAGES } from '../app.messages';

@Controller('units')
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Post()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.UNITS.CREATE })
  create(@Body() createUnitDto: CreateUnitDto) {
    return this.unitsService.create(createUnitDto);
  }

  @Get()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.UNITS.GET_ALL })
  @ApiQuery({ name: 'id', required: false, type: String, description: API_MESSAGES.PARAMETERS.UNIT_ID })
  find(@Query('id') id: string) {
    if (id && id.length > 0) {
      return this.unitsService.findOne(+id);
    }
    return this.unitsService.findAll();
  }

  @Patch()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.UNITS.UPDATE })
  @ApiQuery({ name: 'id', required: true, type: String, description: API_MESSAGES.PARAMETERS.UNIT_ID })
  update(@Query('id') id: string, @Body() updateUnitDto: UpdateUnitDto) {
    return this.unitsService.update(+id, updateUnitDto);
  }

  @Delete()
  @ApiOperation({ summary: API_MESSAGES.CONTROLLER.UNITS.DELETE })
  @ApiQuery({ name: 'id', required: true, type: String, description: API_MESSAGES.PARAMETERS.UNIT_ID })
  remove(@Query('id') id: string) {
    return this.unitsService.remove(+id);
  }
}
