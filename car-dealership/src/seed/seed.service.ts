import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './Data/car.seed';
import { BRANDS_SEED } from './Data/brand.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {

  constructor(private carsService:CarsService, private brandsService: BrandsService){}

  populateDB(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'Seed executed'
  }
}
