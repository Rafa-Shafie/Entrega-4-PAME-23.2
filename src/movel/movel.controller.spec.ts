import { Test, TestingModule } from '@nestjs/testing';
import { MovelController } from './movel.controller';
import { MovelService } from './movel.service';

describe('MovelController', () => {
  let controller: MovelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovelController],
      providers: [MovelService],
    }).compile();

    controller = module.get<MovelController>(MovelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
