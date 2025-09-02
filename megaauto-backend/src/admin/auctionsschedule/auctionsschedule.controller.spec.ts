import { Test, TestingModule } from '@nestjs/testing';
import { AuctionsscheduleController } from './auctionsschedule.controller';

describe('AuctionsscheduleController', () => {
  let controller: AuctionsscheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuctionsscheduleController],
    }).compile();

    controller = module.get<AuctionsscheduleController>(AuctionsscheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
