import { Controller, Post, Body } from '@nestjs/common';
import { ArrayValidationService } from './array-validation.service';
import { ArrayValidationDto } from './dto/array-validation.dto';


@Controller('array-validation')
export class ArrayValidationController {
  constructor(private readonly arrayValidationService: ArrayValidationService) {}

  @Post('/validate')
  create(@Body() arrayValidationDto: ArrayValidationDto) {
    return this.arrayValidationService.validate(arrayValidationDto);
  }

}
