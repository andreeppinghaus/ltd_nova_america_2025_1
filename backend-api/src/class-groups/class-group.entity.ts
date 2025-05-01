import { Unit } from 'src/units/unit.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('class_groups')
export class ClassGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  start_date: Date;

  @Column('date')
  end_date: Date;

  @Column('time without time zone')
  start_time: string;

  @Column('time without time zone')
  end_time: string;

  @Column()
  week_day: string;

  @ManyToOne(() => Unit)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @Column()
  teacher_id: number;
}
