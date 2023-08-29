import { Test, TestingModule } from '@nestjs/testing';
import { ArrayValidationController } from './array-validation.controller';
import { ArrayValidationService } from './array-validation.service';

describe('ArrayValidationController', () => {
  let controller: ArrayValidationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArrayValidationController],
      providers: [ArrayValidationService],
    }).compile();

    controller = module.get<ArrayValidationController>(ArrayValidationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
