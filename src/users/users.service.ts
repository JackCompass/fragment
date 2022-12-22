import { Inject, Injectable, Patch, UseGuards } from '@nestjs/common';
import { UserInfo } from './user.interface';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Finds user by username
  async findUser(username: string) {
    return await this.userRepository.findOne({ where: { username: username } });
  }

  findUserByUserId(id: number) {
    // @ts-ignore
    return this.userRepository.findOne({ where: { id: id } });
  }

  updateUser(id: number, userInfo: QueryDeepPartialEntity<User>) {
    // Fetch the user from the database.
    return this.userRepository.update(id, userInfo);
  }
  register(userInfo: UserInfo) {
    const user = this.userRepository.create(userInfo);
    return this.userRepository.save(user);
  }
}
