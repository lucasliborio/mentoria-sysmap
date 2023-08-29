import { Test, TestingModule } from '@nestjs/testing';
import { ArrayValidationService } from './array-validation.service';

describe('ArrayValidationService', () => {
  let service: ArrayValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArrayValidationService],
    }).compile();

    service = module.get<ArrayValidationService>(ArrayValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
