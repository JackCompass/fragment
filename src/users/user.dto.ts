import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty() @IsString() username;
  @IsNotEmpty() @IsString() password;
  @IsNotEmpty() @IsString() full_name;
  @IsOptional() @IsString() display_name;
}

export class UpdateUserDto {
  @IsOptional() @IsString() full_name;
  @IsOptional() @IsString() display_name;
}
