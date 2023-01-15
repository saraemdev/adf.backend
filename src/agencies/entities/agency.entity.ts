import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { Procedure } from '../../procedures/entities/procedure.entity';

@Entity()
export class Agency {
  @ApiProperty({
    example: '1737cc1e-b0c2-4763-8f34-4920598132b6',
    description: 'Agency ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'UOC',
    description: 'Agency name',
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  title: string;

  @ApiProperty({
    example:
      'http://localhost:3000/api/files/61800602-26a8-4b79-8de4-34ec0b29acbb.png',
    description: 'Agency logo image url',
  })
  @Column()
  img: string;

  @Column('boolean', { default: true })
  isActive: boolean;

  @ApiProperty({
    example: '2022-12-18T18:44:03.627Z',
    description: 'Agency created date',
  })
  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @ApiProperty({
    example: '2022-12-18T18:44:03.627Z',
    description: 'Agency created date',
    default: null,
  })
  @Column('timestamptz', { nullable: true })
  updatedDate: Date;

  //relations
  @ApiProperty({
    example: '[{}]',
    description: 'Agency related procedures in an array',
    type: '[ProcedureDTO]',
    default: 'empty',
  })
  @OneToMany(() => Procedure, (procedure) => procedure.agency, {
    cascade: true,
  })
  procedures: Procedure[];

  @ManyToOne(() => User, (user) => user.agenciesCreated, {
    eager: true,
    onDelete: 'SET NULL',
  })
  createdBy: User;

  @ManyToOne(() => User, (user) => user.agenciesUpdated, {
    eager: true,
    onDelete: 'SET NULL',
  })
  updatedBy: User;

  @BeforeInsert()
  @BeforeUpdate()
  checkTitle() {
    this.title = this.title.toUpperCase();
  }

  @BeforeUpdate()
  updateDate() {
    const now = Date.now();
    this.updatedDate = new Date(now);
  }
}
