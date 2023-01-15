import { Module } from '@nestjs/common';
import { AgenciesModule } from '../agencies/agencies.module';
import { AuthModule } from '../auth/auth.module';
import { ProceduresModule } from '../procedures/procedures.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AgenciesModule, AuthModule, ProceduresModule],
})
export class SeedModule {}
