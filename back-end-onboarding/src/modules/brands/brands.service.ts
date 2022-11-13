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
}
