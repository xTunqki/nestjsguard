import { Test, TestingModule } from '@nestjs/testing';
import { MrgController } from './mrg.controller';

describe('MrgController', () => {
  let controller: MrgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MrgController],
    }).compile();

    controller = module.get<MrgController>(MrgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
