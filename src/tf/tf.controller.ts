import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { TfService } from './tf.service';
import { TFDeposit } from './interfaces/tf.interface';

@UseGuards(RolesGuard)
@Controller('tf')
export class TfController {
  constructor(private readonly mrgService: TfService) {}

  @Get() // Controller buat list Deposit TF
  @Roles('TF_COMPANY') // Yang bisa akses harus punya Authorization: TF_COMPANY saja
  async findAll(): Promise<TFDeposit[]> {
    return this.mrgService.getAll();
  }

}
