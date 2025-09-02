import { Test, TestingModule } from '@nestjs/testing';
import { MastertypeController } from './mastertype.controller';

describe('MastertypeController', () => {
  let controller: MastertypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MastertypeController],
    }).compile();

    controller = module.get<MastertypeController>(MastertypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
