import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { Procedure } from '../procedures/entities/procedure.entity';
import { AgenciesController } from './agencies.controller';
import { AgenciesService } from './agencies.service';
import { Agency } from './entities/agency.entity';

@Module({
  controllers: [AgenciesController],
  providers: [AgenciesService],
  imports: [TypeOrmModule.forFeature([Agency, Procedure]), AuthModule],
  exports: [AgenciesService, TypeOrmModule],
})
export class AgenciesModule {}
