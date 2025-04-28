import { HttpException, HttpStatus, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { Role } from '../enums/roles.enum';
import { HashingService } from 'src/auth/hashing/hashing.service';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private readonly hashingService: HashingService,
  ) { }

  async onModuleInit() {
    const count = await this.userRepository.count();
    if (count === 0) {
      await this.createExampleUser();
    }
  }

  async create(data: CreateUserDto): Promise<User> {

    //falta controle de erros para um usuario duplicado
    data.password = await this.hashingService.hash(data.password);


    const user = this.userRepository.create(data);
    return this.userRepository.save(user);

    // }catch (e) {
   // console.log(e);
    // if (e.code=='23505') {
    //   throw new NotFoundException(`(email)=${data.email} already exists.`);
    // }
    // return  data;
    // }
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
      name: 'Admin',
      email: 'example@example.com',
      password: await this.hashingService.hash('PAssword123*'),
      role: Role.ADMIN,
      is_active: true,
    };
    const user = this.userRepository.create(exampleUser);
    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    if (updateUserDto?.password) {
      updateUserDto.password = await this.hashingService.hash(updateUserDto.password);
    }


    const userUpdate = await this.userRepository.preload({
      id,
      ...updateUserDto
    });

    if (!userUpdate) {
      throw new NotFoundException('User not found');
    }

    return this.userRepository.save(userUpdate);

  }

  async findByEmail(email: string): Promise<User> {
    console.log("findbyemail"+email);
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new HttpException(`User with ${email} not found`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
