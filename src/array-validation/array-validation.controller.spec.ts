import { Test, TestingModule } from '@nestjs/testing';
import { ArrayValidationController } from './array-validation.controller';
import { ArrayValidationService } from './array-validation.service';
import { faker } from '@faker-js/faker'
import { ArrayValidationDto } from './dto/array-validation.dto';
describe('ArrayValidationController', () => {
  let controller: ArrayValidationController;
  let service: ArrayValidationService;

  const ArrayValidationStub = {
    provide: ArrayValidationService,
    useFactory: () => ({
      validate: jest.fn(() => [])
    })
  }
  const MockArrayValidationDto = (): string => {
    return faker.string.alphanumeric({ length: 15 })

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArrayValidationController],
      providers: [ArrayValidationStub],
    }).compile();

    controller = module.get<ArrayValidationController>(ArrayValidationController);
    service = module.get<ArrayValidationService>(ArrayValidationService)
  });


  it('Should call validate())', () => {
    const serviceSpy = jest.spyOn(service, 'validate')
    const mockArrayValidationDto = MockArrayValidationDto()
    controller.create({data: mockArrayValidationDto})
    expect(serviceSpy).toBeCalled();
  });
  
  it('Should call validate() with correct value)', () => {
    const serviceSpy = jest.spyOn(service, 'validate')
    const mockArrayValidationDto = MockArrayValidationDto()
    controller.create({data: mockArrayValidationDto})
    expect(serviceSpy).toBeCalledWith(mockArrayValidationDto)
  });
  
  it('Should result with correct value', () => {
    jest.spyOn(service, 'validate').mockReturnValue({
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
