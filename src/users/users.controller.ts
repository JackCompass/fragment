import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {UserInfo} from "./user.interface";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }
    @Post('register')
    registerUser(@Body() userInfo: UserInfo) {
        return this.userService.register(userInfo);
    }
}
