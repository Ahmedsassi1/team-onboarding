import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
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
  @Column({
    default: '',
  })
  description: string;
}