import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from '../auth/decorators';
import { User } from '../auth/entities/user.entity';
import { ValidRoles } from '../auth/interfaces';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { ProceduresService } from './procedures.service';

@ApiTags('Procedures')
@Controller('procedures')
export class ProceduresController {
  constructor(private readonly proceduresService: ProceduresService) {}

  @Post()
  @Auth()
  create(
    @Body() createProcedureDto: CreateProcedureDto,
    @GetUser() user: User,
  ) {
    return this.proceduresService.create(createProcedureDto, user);
  }

  @Get()
  findAll() {
    return this.proceduresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.proceduresService.findOne(id);
  }

  @Patch(':id')
  @Auth()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProcedureDto: UpdateProcedureDto,
    @GetUser() user: User,
  ) {
    return this.proceduresService.update(id, updateProcedureDto, user);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin, ValidRoles.crossuser, ValidRoles.superuser)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.proceduresService.remove(id);
  }
}
