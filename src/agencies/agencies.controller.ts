import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';
import { ValidRoles } from '../auth/interfaces';
import { AgenciesService } from './agencies.service';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { Agency } from './entities/agency.entity';

@ApiTags('Agencies')
@Controller('agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Post()
  @Auth()
  @ApiResponse({ status: 201, description: 'Agency was created', type: Agency })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  create(@Body() createAgencyDto: CreateAgencyDto, @GetUser() user: User) {
    return this.agenciesService.create(createAgencyDto, user);
  }

  @Get()
  findAll() {
    return this.agenciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agenciesService.findOne(id);
  }

  @Get('procedures/:agencyId')
  findProceduresByAgency(@Param('agencyId') agencyId: string) {
    return this.agenciesService.findProceduresByAgency(agencyId);
  }

  @Patch(':id')
  @Auth()
  update(
    @Param('id') id: string,
    @Body() updateAgencyDto: UpdateAgencyDto,
    @GetUser() user: User,
  ) {
    return this.agenciesService.update(id, updateAgencyDto, user);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.crossuser)
  remove(@Param('id') id: string) {
    return this.agenciesService.remove(id);
  }
}
