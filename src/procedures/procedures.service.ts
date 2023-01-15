import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agency } from '../agencies/entities/agency.entity';
import { User } from '../auth/entities/user.entity';
import { CreateProcedureDto } from './dto/create-procedure.dto';
import { UpdateProcedureDto } from './dto/update-procedure.dto';
import { Procedure } from './entities/procedure.entity';

@Injectable()
export class ProceduresService {
  private readonly logger = new Logger('ProceduresService');

  constructor(
    @InjectRepository(Procedure)
    private readonly procedureRepository: Repository<Procedure>,
    @InjectRepository(Agency)
    private readonly agencyRepository: Repository<Agency>,
  ) {}

  async create(createProcedureDto: CreateProcedureDto, user: User) {
    try {
      const { agencyId, ...procedureDetails } = createProcedureDto;
      const agency = await this.agencyRepository.findOneBy({ id: agencyId });

      if (!agency)
        throw new NotFoundException(`Agency with id ${agencyId} not found`);

      const procedure = this.procedureRepository.create({
        ...procedureDetails,
        createdBy: user,
        agency,
      });
      //save in DB
      await this.procedureRepository.save(procedure);

      return procedure;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.procedureRepository.find();
  }

  async findOne(id: string) {
    const procedure = await this.procedureRepository.findOneBy({ id });

    if (!procedure)
      throw new NotFoundException(`Procedure with id ${id} not found`);

    return this.procedureRepository.findOneBy({ id });
  }

  async update(id: string, updateProcedureDto: UpdateProcedureDto, user: User) {
    const { agencyId, ...procedureDetails } = updateProcedureDto;
    let agency: Agency;

    if (!agencyId) {
      const agencyPre = await this.agencyRepository
        .createQueryBuilder('agency')
        .leftJoinAndSelect('agency.procedures', 'procedure')
        .where('procedure.id = :id', { id })
        .getMany();

      agency = await this.agencyRepository.findOneBy({ id: agencyPre[0].id });
    } else {
      agency = await this.agencyRepository.findOneBy({ id: agencyId });
    }

    const procedure = await this.procedureRepository.preload({
      id,
      ...procedureDetails,
      updatedBy: user,
      agency: agency,
    });

    if (!procedure)
      throw new NotFoundException(`Procedure with id: ${id} not found`);

    try {
      await this.procedureRepository.save(procedure);
      return procedure;
    } catch (error) {
      this.handleDBExceptions(error);
    }

    return procedure;
  }

  async remove(id: string) {
    const procedure = await this.findOne(id);
    await this.procedureRepository.remove(procedure);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
