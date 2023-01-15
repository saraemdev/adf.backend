import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agency } from '../../agencies/entities/agency.entity';
import { User } from '../../auth/entities/user.entity';

@Entity()
export class Procedure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  title: string;

  @Column('text', { unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column('text', { nullable: true })
  details: string;

  @Column('text', { nullable: true })
  phone: string;

  @Column('text')
  url: string;

  @Column('boolean', { default: false })
  isActive: boolean;

  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @Column('timestamptz', { nullable: true })
  updatedDate: Date;

  /*
  @Column('text')
  procedure_img: string;

  @Column('varchar', { length: 300, nullable: true })
  internalComment: string;
  */

  //relations
  @ManyToOne(() => Agency, (agency) => agency.procedures, {
    eager: true,
    onDelete: 'CASCADE',
  })
  agency: Agency;

  @ManyToOne(() => User, (user) => user.proceduresCreated, {
    eager: true,
    onDelete: 'SET NULL',
  })
  createdBy: User;

  @ManyToOne(() => User, (user) => user.proceduresUpdated, {
    eager: true,
    onDelete: 'SET NULL',
  })
  updatedBy: User;

  @BeforeInsert()
  @BeforeUpdate()
  checkSlug() {
    this.slug = this.title
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '')
      .replaceAll('&', '_');
  }

  @BeforeUpdate()
  updateDate() {
    const now = Date.now();
    this.updatedDate = new Date(now);
  }
}
