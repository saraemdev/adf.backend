//import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateAgencyDto } from './create-agency.dto';

export class UpdateAgencyDto extends PartialType(CreateAgencyDto) {}
