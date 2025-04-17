import { Entity, Column, JoinColumn, PrimaryColumn, OneToOne } from 'typeorm';

import { Class } from '../classes/class.entity';
import { AttendanceStatus } from '../enums/attendance-status.enum';

@Entity()
export class Attendance {
  @PrimaryColumn()
  student: number;

  @PrimaryColumn()
  @OneToOne(() => Class, (cls) => cls.attendances)
  @JoinColumn({ name: 'class_id' })
  class: string;

  @Column()
  teacher: number;

  @Column()
  date: Date;

  @Column()
  status: AttendanceStatus;
}
