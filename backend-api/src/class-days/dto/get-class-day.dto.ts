import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetClassesQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  id?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  class_group_id?: number;

  @ApiProperty({ type: String, format: 'date', required: false })
  @IsOptional()
  date?: string;
}
