import { Module } from '@nestjs/common';
import { StringCheckService } from './string-check.service';
import { StringCheckController } from './string-check.controller';

@Module({
  controllers: [StringCheckController],
  providers: [StringCheckService]
})
export class StringCheckModule {}
