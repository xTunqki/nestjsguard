import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { MrgController } from './mrg/mrg.controller';
import { TfController } from './tf/tf.controller';
import { MrgService } from './mrg/mrg.service';
import { TfService } from './tf/tf.service';

@Module({
  imports: [CoreModule, CatsModule],
  controllers: [MrgController, TfController],
  providers: [MrgService, TfService],
})
export class AppModule {}
