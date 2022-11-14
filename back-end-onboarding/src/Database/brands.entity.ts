import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Car } from './cars.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'brand_id',
  })
  id: number;
  @Column({
    nullable: false,
    default: '',
  })
  name: string;
  @Column({
    default: '',
  })
  image: string;
  @OneToMany(() => Car, (car) => car.id)
  cars: Car[];
}
