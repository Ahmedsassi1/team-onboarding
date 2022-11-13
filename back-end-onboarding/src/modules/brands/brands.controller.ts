import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { BrandInterface, BrandsService } from './brands.service';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandsService) {}

  @Get()
  async findAll(@Req() request: Request) {
    const cats: Array<BrandInterface> = await this.brandService.findAll();
    return cats;
  }
}
