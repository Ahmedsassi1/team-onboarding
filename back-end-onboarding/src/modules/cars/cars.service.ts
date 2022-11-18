import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarDto } from 'src/modules/cars/dto/cars.dto';
import { Car } from 'src/common/models/cars.entity';
import { Repository } from 'typeorm';
import { User } from 'src/common/models/users.entity';

interface Owner {
  id: any;
}
@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepo: Repository<Car>,
  ) {}

  addCar(body: CarDto) {
    const newCar = this.carRepo.save(new Car(body));
    return newCar['model'];
  }

  getAll() {
    return this.carRepo.find({
      take: 10,
    });
  }

  getAllById(id: string) {
    return this.carRepo
      .createQueryBuilder()
      .select(['id', 'model', 'Car.brandName'])
      .addSelect((subQuery) => {
        return subQuery
          .select('id')
          .from(User, 'user')
          .where('id = :id', { id })
          .limit(1);
      }, 'user')
      .execute();
  }

  getOneCar(id: string) {
    return this.carRepo.findOne({ where: { id: id } });
  }

  updateCar(id: string, body: Partial<CarDto>) {
    return this.carRepo.update(id, body);
  }

  deleteCar(id: string) {
    return this.carRepo.delete(id);
  }
}
