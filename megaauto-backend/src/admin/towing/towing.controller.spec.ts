import { Test, TestingModule } from '@nestjs/testing';
import { TowingController } from './towing.controller';

describe('TowingController', () => {
  let controller: TowingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TowingController],
    }).compile();

    controller = module.get<TowingController>(TowingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
