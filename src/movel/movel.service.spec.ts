import { Test, TestingModule } from '@nestjs/testing';
import { MovelService } from './movel.service';

describe('MovelService', () => {
  let service: MovelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovelService],
    }).compile();

    service = module.get<MovelService>(MovelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
