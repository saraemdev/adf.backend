import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agency } from '../agencies/entities/agency.entity';
import { AuthModule } from '../auth/auth.module';
import { Procedure } from './entities/procedure.entity';
import { ProceduresController } from './procedures.controller';
import { ProceduresService } from './procedures.service';

@Module({
  controllers: [ProceduresController],
  providers: [ProceduresService],
  imports: [TypeOrmModule.forFeature([Procedure, Agency]), AuthModule],
  exports: [ProceduresService, TypeOrmModule],
})
export class ProceduresModule {}
