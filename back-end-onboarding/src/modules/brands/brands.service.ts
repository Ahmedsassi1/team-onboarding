import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from '../../Database/brands.entity';
import { Repository } from 'typeorm';
export interface BrandInterface {
  name: string;
  id: number;
  image: string;
}
@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<BrandInterface>,
  ) {}
  findAll(): Promise<BrandInterface[]> {
    return this.brandRepository.find();
  }
}
