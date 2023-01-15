import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agency } from '../../agencies/entities/agency.entity';
import { Procedure } from '../../procedures/entities/procedure.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text', { select: false })
  password: string;

  @Column('text')
  fullName: string;

  @Column('boolean', { default: true })
  isActive: boolean;

  @Column('text', { array: true, default: ['user'] })
  roles: string[];

  //relations
  @OneToMany(() => Agency, (agency) => agency.createdBy)
  agenciesCreated: Agency[];

  @OneToMany(() => Agency, (agency) => agency.updatedBy)
  agenciesUpdated: Agency[];

  @OneToMany(() => Procedure, (procedure) => procedure.createdBy)
  proceduresCreated: Procedure[];

  @OneToMany(() => Procedure, (procedure) => procedure.updatedBy)
  proceduresUpdated: Procedure[];

  @BeforeInsert()
  @BeforeUpdate()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
}
