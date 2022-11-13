import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/Database/cars.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private readonly repo: Repository<Car>) {}

  //create a car
  create(createCar: any) {
    const newCar = this.repo.create(createCar);
    return this.repo.save(newCar);
  }
  //get all cars
  findAll() {
    return this.repo.find();
  }
  //get one car by id
  findOne(id: string) {
    return this.repo.findOne({ where: { id: parseInt(id, 10) } });
  }
  // update a car
  async update(id: number, updateCar: any) {
    await this.repo
      .createQueryBuilder()
      .update()
      .set(updateCar)
      .where('id = :id', { id })
      .execute();
    return this.repo.findOne({ where: { id: id } });
  }
  //delete a car
  remove(id: number) {
    return this.repo
      .createQueryBuilder()
      .delete()
      .from(Car)
      .where('id = :id', { id })
      .execute();
  }
}
