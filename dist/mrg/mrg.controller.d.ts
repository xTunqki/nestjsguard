import { MrgService } from './mrg.service';
import { MRGDeposit } from './interfaces/mrg.interface';
export declare class MrgController {
    private readonly mrgService;
    constructor(mrgService: MrgService);
    findAll(): Promise<MRGDeposit[]>;
}
