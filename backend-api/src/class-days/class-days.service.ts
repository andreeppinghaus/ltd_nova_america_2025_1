import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassDay } from './class-day.entity';
import { CreateClassDayDto } from './dto/create-class-day.dto';
import { UpdateClassDayDto } from './dto/update-class-day.dto';
import { GetClassesQueryDto } from './dto/get-class-day.dto';

@Injectable()
export class ClassDaysService {
  constructor(
    @InjectRepository(ClassDay)
    private classDayRepo: Repository<ClassDay>,
  ) {}

  create(createClassDayDto: CreateClassDayDto) {
    const classDay = this.classDayRepo.create(createClassDayDto);
    return this.classDayRepo.save(classDay);
  }

  async findClasses(filters: GetClassesQueryDto): Promise<ClassDay[]> {
    const query = this.classDayRepo
      .createQueryBuilder('class_day')
      .select([
        'class_day.id',
        'class_day.date',
        'class_day.content',
        'class_day.status',
        'class_day.class_group_id',
      ]);

    if (filters.id) {
      query.andWhere('class_day.id = :id', { id: filters.id });
    }

    if (filters.class_group_id) {
      query.andWhere('class_day.class_group_id = :class_group_id', {
        class_group_id: filters.class_group_id,
      });
    }

    if (filters.date) {
      query.andWhere('class_day.date = :date', { date: filters.date });
    }

    return query.getMany();
  }

  /*   findAll() {
    return this.classDayRepo.find();
  }

  findByClassGroupId(id: number) {
    return this.classDayRepo.find({
      where: {
        class_group_id: id,
      },
      order: {
        date: 'ASC',
      },
    });
  }

  findByClassGroupIdAndDate(id: number, date: Date) {
    return this.classDayRepo.find({
      where: {
        class_group_id: id,
        date: date,
      },
      order: {
        date: 'ASC',
      },
    });
  }

  findByDate(date: Date) {
    return this.classDayRepo.find({
      where: {
        date: date,
      },
      order: {
        class_group_id: 'ASC',
      },
    });
  } */

  update(id: number, updateClassDayDto: UpdateClassDayDto) {
    return this.classDayRepo.update(id, updateClassDayDto);
  }

  remove(id: number) {
    return this.classDayRepo.delete(id);
  }
}
