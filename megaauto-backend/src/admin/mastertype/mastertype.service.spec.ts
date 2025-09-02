import { Test, TestingModule } from '@nestjs/testing';
import { MastertypeService } from './mastertype.service';

describe('MastertypeService', () => {
  let service: MastertypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MastertypeService],
    }).compile();

    service = module.get<MastertypeService>(MastertypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
