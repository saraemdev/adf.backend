import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProcedureDto {
  @ApiProperty({
    description: 'Procedure title',
    uniqueItems: true,
    nullable: false,
    minLength: 1,
    maxLength: 55,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(55)
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  details?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty()
  @IsString()
  @MinLength(5)
  url: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdDateTime?: Date;

  @ApiProperty()
  @IsString()
  agencyId: string;
}
