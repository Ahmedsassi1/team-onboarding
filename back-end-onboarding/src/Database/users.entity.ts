import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './cars.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  @Column({
    nullable: false,
    default: '',
  })
  username: string;
  @Column({
    default: '',
  })
  image: string;
  @Column({
    default: '',
  })
  email: string;
  @Column({
    default: '',
  })
  password: string;
  @Column({
    default: 'user',
  })
  role: 'user'|'admin';
  @OneToMany(()=>Car, (car)=>car.id)
  cars:Car[]
}