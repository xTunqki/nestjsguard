import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findAllMRG(): any[] {
    return ["DEPOSIT MRG", "DEPOSIT MRG", "DEPOSIT MRG", "DEPOSIT MRG", "DEPOSIT MRG"];
  }

  findAllTF(): any[] {
    return ["DEPOSIT TF", "DEPOSIT TF", "DEPOSIT TF", "DEPOSIT TF", "DEPOSIT TF"];
  }
}
