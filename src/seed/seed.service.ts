import { Injectable } from '@nestjs/common';
import { AgenciesService } from '../agencies/agencies.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/entities/user.entity';
import { ProceduresService } from '../procedures/procedures.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    private readonly agenciesService: AgenciesService,
    private readonly procedureService: ProceduresService,
    private readonly authService: AuthService,
  ) {}

  async runSeed() {
    await this.deleteTables();

    const user = await this.insertUsers();
    const agency = await this.insertAgencies(user);
    await this.insertProcedures(user, agency.id);

    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    await this.agenciesService.deleteAllAgencies();
    await this.authService.deleteAllUsers();
  }

  private async insertUsers() {
    const users = initialData.users;

    const insertUsers = [];

    users.forEach((user) => {
      insertUsers.push(this.authService.create(user));
    });

    const dbUsers = await Promise.all(insertUsers);

    return dbUsers[0]; //return admin user
  }

  private async insertAgencies(user: User) {
    const agencies = initialData.agencies;

    const insertAgencies = [];

    agencies.forEach((agency) => {
      insertAgencies.push(this.agenciesService.create(agency, user));
    });

    const dbAgencies = await Promise.all(insertAgencies);

    return dbAgencies[0]; //return first agency
  }

  private async insertProcedures(user: User, agencyId: string) {
    const procedures = initialData.procedures;

    const insertProcedures = [];

    procedures.forEach((procedure) => {
      insertProcedures.push(
        this.procedureService.create({ ...procedure, agencyId }, user),
      );
    });

    await Promise.all(insertProcedures);

    return true;
  }
}
