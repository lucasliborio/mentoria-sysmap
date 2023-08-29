import { Injectable } from '@nestjs/common';
import { StringCheckResult } from './entities/string-check.entity';

@Injectable()
export class StringCheckService {
  result(data: string): StringCheckResult {
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
