import { Test, TestingModule } from '@nestjs/testing';
import { MrgService } from './mrg.service';

describe('MrgService', () => {
  let service: MrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MrgService],
    }).compile();

    service = module.get<MrgService>(MrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
