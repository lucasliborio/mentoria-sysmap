import { Injectable } from '@nestjs/common';
import { ArrayValidationDto } from './dto/array-validation.dto';

@Injectable()
export class ArrayValidationService {
  validate(data: ArrayValidationDto) {
    return 'This action adds a new arrayValidation';
  }

}
