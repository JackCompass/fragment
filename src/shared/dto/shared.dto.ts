import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
import { Transform } from 'class-transformer';

export class IdDto {
  @IsNumber()
  id: number;
}
