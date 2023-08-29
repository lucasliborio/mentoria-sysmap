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

  it('Should result with correct Value ', () => {
    expect(service.validate('abc123defg4567')).toStrictEqual({
      numbers: [1, 2, 3, 4, 5, 6, 7],
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    })
  });
});
