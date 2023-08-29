import { Module } from '@nestjs/common';
import { ArrayValidationService } from './array-validation.service';
import { ArrayValidationController } from './array-validation.controller';

@Module({
  controllers: [ArrayValidationController],
  providers: [ArrayValidationService]
})
export class ArrayValidationModule {}
