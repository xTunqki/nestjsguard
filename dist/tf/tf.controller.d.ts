import { TfService } from './tf.service';
import { TFDeposit } from './interfaces/tf.interface';
export declare class TfController {
    private readonly mrgService;
    constructor(mrgService: TfService);
    findAll(): Promise<TFDeposit[]>;
}
