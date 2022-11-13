import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from '../../Database/brands.entity';
import { Repository } from 'typeorm';
export interface BrandInterface {
  id: number;
  name: string;
  image: string;
}
@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<BrandInterface>,
  ) {}
  create(brand: BrandInterface): Promise<BrandInterface> {
    return this.brandRepository.save(this.brandRepository.create(brand));
  }
  findAll() {
    return this.brandRepository.find();
  }
  //get one car by id
  findOne(id: string) {
    return this.brandRepository.findOne({ where: { id: parseInt(id, 10) } });
  }
  // update a car
  async update(id: number, updateBrand: any) {
    await this.brandRepository
      .createQueryBuilder()
      .update()
      .set(updateBrand)
      .where('id = :id', { id })
      .execute();
    return this.brandRepository.findOne({ where: { id: id } });
  }
  //delete a car
  remove(id: number) {
    return this.brandRepository
      .createQueryBuilder()
      .delete()
      .from(Brand)
      .where('id = :id', { id })
      .execute();
  }
}
