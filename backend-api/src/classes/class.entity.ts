import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Unit } from '../units/unit.entity';
import { User } from '../users/user.entity';
import { Attendance } from '../attendances/attendance.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  start_date: Date;

  @Column('date')
  end_date: Date;

  @Column('date')
  start_time: Date;

  @Column('date')
  end_time: Date;

  @Column()
  week_day: string;

  @ManyToOne(() => Unit)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'teacher_id' })
  teacher: User;

  @OneToMany(() => Attendance, (attendance) => attendance.class)
  attendances: Attendance[];
}
