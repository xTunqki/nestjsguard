import { Injectable } from '@nestjs/common';
import { MRGDeposit } from './interfaces/mrg.interface';

@Injectable()
export class MrgService {
    private readonly depositData: MRGDeposit[] = [{
        account: "tungkitf",
        amount: 200,
        approved: false,
        broker: "MRG"
    }];

//   create(cat: MRGDeposit) {
//     this.cats.push(cat);
//   }

//   findAll(): MRGDeposit[] {
//     return this.cats;
//   }

  getAll(): MRGDeposit[] {
    return this.depositData;
  }
}
