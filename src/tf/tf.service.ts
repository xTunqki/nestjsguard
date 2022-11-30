import { Injectable } from '@nestjs/common';
import { TFDeposit } from './interfaces/tf.interface';

@Injectable()
export class TfService {
    private readonly depositData: TFDeposit[] = [{
        account: "tungkitf",
        amount: 200,
        approved: false,
        broker: "TF"
    }];

//   create(cat: MRGDeposit) {
//     this.cats.push(cat);
//   }

//   findAll(): MRGDeposit[] {
//     return this.cats;
//   }

  getAll(): TFDeposit[] {
    return this.depositData;
  }
}
