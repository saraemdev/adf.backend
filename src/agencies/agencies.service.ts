import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { Procedure } from '../procedures/entities/procedure.entity';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { Agency } from './entities/agency.entity';

@Injectable()
export class AgenciesService {
  private readonly logger = new Logger('AgenciesService');

  constructor(
    @InjectRepository(Agency)
    private readonly agencyRepository: Repository<Agency>,
    @InjectRepository(Procedure)
    private readonly procedureRepository: Repository<Procedure>,
  ) {}

  async create(createAgencyDto: CreateAgencyDto, user: User) {
    try {
      const agency = this.agencyRepository.create({
        ...createAgencyDto,
        createdBy: user,
      });
      //save in DB
      await this.agencyRepository.save(agency);

      return agency;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.agencyRepository.find();
  }

  async findOne(id: string) {
    const agency = await this.agencyRepository.findOneBy({ id });

    if (!agency) throw new NotFoundException(`Agency with id ${id} not found`);

    return agency;
  }

  async findProceduresByAgency(agencyId: string) {
    const procedures = await this.procedureRepository
      .createQueryBuilder('procedures')
      .leftJoinAndSelect('procedures.agency', 'agency')
      .where('agency.id = :id', { id: agencyId })
      .getMany();

    return procedures;
  }

  async update(id: string, updateAgencyDto: UpdateAgencyDto, user: User) {
    const agency = await this.agencyRepository.preload({
      id: id,
      ...updateAgencyDto,
      updatedBy: user,
    });

    if (!agency) throw new NotFoundException(`Agency with id ${id} not found`);

    try {
      await this.agencyRepository.save(agency);
      return agency;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  //Delete the agency and all procedures related with.
  async remove(id: string) {
    const agency = await this.findOne(id);
    await this.agencyRepository.remove(agency);
  }

  //Delete all the agencies and procedures related with
  async deleteAllAgencies() {
    const query = this.agencyRepository.createQueryBuilder('agency');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
