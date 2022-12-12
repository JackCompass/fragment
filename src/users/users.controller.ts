import {Controller, Get, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@Controller('users')
export class UsersController {

    @UseGuards(JwtAuthGuard)
    @Get('greet')
    greetUser() {
        return "Hello User"
    }
}
