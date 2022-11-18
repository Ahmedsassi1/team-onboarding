import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Brand } from './brands.entity';
import { CarDto } from 'src/modules/cars/dto/cars.dto';

@Entity('cars')
export class Car {
  constructor(entity: CarDto) {
    Object.assign(this, entity);
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  model: string;

  @Column({ type: 'varchar', nullable: false })
  brandName: string;

  @Column({ type: 'varchar', nullable: false })
  serialNum: string;

  @ManyToOne(() => User, {
    eager: true,
  })
  @JoinColumn({ name: 'user_id' })
  owner: User['id'];

  @ManyToOne(() => Brand, (brand) => brand.cars)
  brand: Brand;
}
