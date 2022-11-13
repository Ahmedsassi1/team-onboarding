import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  username: string;
  @Column({
    default: '',
  })
  image: string;
}
