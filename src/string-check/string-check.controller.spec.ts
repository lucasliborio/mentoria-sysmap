import { Test, TestingModule } from '@nestjs/testing';
import { StringCheckController } from './string-check.controller';
import { StringCheckService } from './string-check.service';
import { faker } from '@faker-js/faker'

describe('ArrayValidationController', () => {
  let controller: StringCheckController;
  let service: StringCheckService;

  const ArrayValidationStub = {
    provide: StringCheckService,
    useFactory: () => ({
      result: jest.fn(() => [])
    })
  }
  const MockStringCheckDto = (): string => {
    return faker.string.alphanumeric({ length: 15 })

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StringCheckController],
      providers: [ArrayValidationStub],
    }).compile();

    controller = module.get<StringCheckController>(StringCheckController);
    service = module.get<StringCheckService>(StringCheckService)
  });


  it('Should call result())', () => {
    const serviceSpy = jest.spyOn(service, 'result')
    const mockArrayValidationDto = MockStringCheckDto()
    controller.create({ data: mockArrayValidationDto })
    expect(serviceSpy).toBeCalled();
  });

  it('Should call result() with correct value)', () => {
    const serviceSpy = jest.spyOn(service, 'result')
    const mockStringCheckDto = MockStringCheckDto()
    controller.create({ data: mockStringCheckDto })
    expect(serviceSpy).toBeCalledWith(mockStringCheckDto)
  });

  it('Should result with correct value', () => {
    jest.spyOn(service, 'result').mockReturnValue({
      numbers: [1, 2, 3, 4, 5, 6, 7],
      letters: ["a", "b", "c", "d", "e", "f", "g"]
    })
    const result = controller.create({ data: 'abc123defg4567' })
    expect(result).toStrictEqual({
      numbers: [1, 2, 3, 4, 5, 6, 7],
      letters: ["a", "b", "c", "d", "e", "f", "g"]
    })
  });
});
