import { Test, TestingModule } from '@nestjs/testing';
import { TfService } from './tf.service';

describe('TfService', () => {
  let service: TfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TfService],
    }).compile();

    service = module.get<TfService>(TfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
