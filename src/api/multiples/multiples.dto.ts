import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class CheckNumberMultiplesDTO {
  @ApiProperty({
    description: 'Input number to get multiples information about',
    required: true,
  })
  @Type(() => Number)
  @IsInt()
  number: number;
}
