import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { MrgService } from './mrg.service';
import { MRGDeposit } from './interfaces/mrg.interface';

@UseGuards(RolesGuard)
@Controller('mrg')
export class MrgController {
  constructor(private readonly mrgService: MrgService) {}

  @Get() // Controller buat list deposit MRG
  @Roles('MRG_COMPANY', 'TF_COMPANY') // Yang bisa akses harus punya Authorization: MRG_COMPANY atau TF_COMPANY
  async findAll(): Promise<MRGDeposit[]> {
    return this.mrgService.getAll();
  }

}
