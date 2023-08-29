import { NestFactory } from '@nestjs/core';

import { StringCheckModule } from './string-check/string-check.module';

async function bootstrap() {
  const app = await NestFactory.create(StringCheckModule);
  await app.listen(3000);
}
bootstrap();
