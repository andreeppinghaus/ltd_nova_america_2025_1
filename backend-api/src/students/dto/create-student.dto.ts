import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  cpf: number;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  is_active: boolean;

  @ApiProperty()
  class_group_id: number;
}
