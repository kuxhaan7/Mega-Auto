import { Test, TestingModule } from '@nestjs/testing';
import { AuctionsscheduleService } from './auctionsschedule.service';

describe('AuctionsscheduleService', () => {
  let service: AuctionsscheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuctionsscheduleService],
    }).compile();

    service = module.get<AuctionsscheduleService>(AuctionsscheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
