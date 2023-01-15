import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAgencyDto {
  @ApiProperty({
    description: 'Agency name',
    uniqueItems: true,
    nullable: false,
    minLength: 1,
    maxLength: 55,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(55)
  title: string;

  @ApiProperty({
    description: 'Agency logo image url',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  img: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdDate?: Date;
}
