import { Test, TestingModule } from '@nestjs/testing';
import { StringCheckService } from './string-check.service';

describe('ArrayValidationService', () => {
  let service: StringCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringCheckService],
    }).compile();

    service = module.get<StringCheckService>(StringCheckService);
  });

  it('Should result with correct Value ', () => {
    expect(service.result('abc123defg4567')).toStrictEqual({
      numbers: [1, 2, 3, 4, 5, 6, 7],
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    })
  });
});
