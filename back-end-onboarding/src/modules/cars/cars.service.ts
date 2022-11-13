import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/Database/cars.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CarsService { constructor(@InjectRepository(Car) private readonly repo: Repository<Car>) { }
create(createUser:any) {
  const newUser = this.repo.create(createUser);
  return this.repo.save(newUser);
}

findAll() {
  return `This action returns all users`;
}

findOne(id: number) {
  return `This action returns a #${id} user`;
}

update(id: number, updateUser: any) {
  return `This action updates a #${id} user`;
}

remove(id: number) {
  return `This action removes a #${id} user`;
}
}
