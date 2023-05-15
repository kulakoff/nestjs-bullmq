import { MaxLength, MinLength } from 'class-validator';

export class CreateDto {
  @MinLength(3)
  @MaxLength(30)
  fileName: string;
}
