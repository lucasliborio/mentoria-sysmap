import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ArrayValidationService } from './array-validation.service';
import { ArrayValidationDto } from './dto/array-validation.dto';


@Controller('array-validation')
export class ArrayValidationController {
  constructor(private readonly arrayValidationService: ArrayValidationService) { }

  @Post('/validate')
  create(@Body(new ValidationPipe()) arrayValidationDto: ArrayValidationDto) {
    const { data } = arrayValidationDto
    return this.arrayValidationService.validate(data);
  }

}
