import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {LocalStrategy} from "./startegy/local.strategy";
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {JWT_TOKEN} from "../constants";

@Module({
  imports: [UsersModule, JwtModule.register({secret: JWT_TOKEN, signOptions: {expiresIn: "100d"}})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
