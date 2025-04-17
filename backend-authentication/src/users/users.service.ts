import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { Role } from '../enums/roles.enum';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    const count = await this.userRepository.count();
    if (count === 0) {
      await this.createExampleUser();
    }
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async createExampleUser(): Promise<User> {
    const exampleUser: CreateUserDto = {
      name: 'Example User',
      email: 'example@example.com',
      password: 'Password123',
      role: Role.STUDENT,
      is_active: true,
    };
    const user = this.userRepository.create(exampleUser);
    return this.userRepository.save(user);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
