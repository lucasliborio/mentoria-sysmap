import { Injectable } from '@nestjs/common';
import { ArrayValidationDto } from './dto/array-validation.dto';
import { ArrayValidation } from './entities/array-validation.entity';

@Injectable()
export class ArrayValidationService {
  validate(data: string): ArrayValidation {
    const numbers: Array<number> = []
    const letters: Array<string> = []

    data.trim().split('').forEach(element => {
      Number.isNaN(Number(element)) ? letters.push(element) : numbers.push(Number(element))
    });

    return {
      numbers,
      letters
    }
  }

}
