import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClassGroup } from '../class-groups/class-group.entity';
import { ClassDayStatus } from 'src/enums/class-day-status.enum';

@Entity('class_days')
export class ClassDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class_group_id: number;

  @ManyToOne(() => ClassGroup)
  @JoinColumn({ name: 'class_group_id' })
  class_group: ClassGroup;

  @Column('date')
  date: Date;

  @Column()
  content: string;

  @Column()
  status: ClassDayStatus;
}
