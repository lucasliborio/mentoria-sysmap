import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { StringCheckService } from './string-check.service';
import { StringCheckDto } from './dto/string-check.dto';


@Controller('string-check')
export class StringCheckController {
  constructor(private readonly stringCheckService: StringCheckService) { }

  @Post('/result')
  create(@Body(new ValidationPipe()) stringCheckDto: StringCheckDto) {
    const { data } = stringCheckDto
    return this.stringCheckService.result(data);
  }

}
