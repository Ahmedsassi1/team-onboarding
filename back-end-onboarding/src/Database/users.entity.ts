import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'brand_id',
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
  role: string;
}