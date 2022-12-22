import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserInfo } from './user.interface';
import { UsersService } from './users.service';
import { RegisterUserDto, UpdateUserDto } from './user.dto';
import { IdDto } from '../shared/dto/shared.dto';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  registerUser(@Body() userInfo: RegisterUserDto) {
    return this.userService.register(userInfo);
  }

  @Patch(':id')
  updateUser(@Param() param: IdDto, @Body() userInfo: UpdateUserDto) {
    return this.userService.updateUser(param.id, userInfo);
  }

  // todo: Either return user or throw error.
  @Get(':id')
  getUser(@Param() param: IdDto) {
    return this.userService.findUserByUserId(param.id);
  }
}
