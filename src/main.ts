import { NestFactory } from '@nestjs/core';

import { ArrayValidationModule } from './array-validation/array-validation.module';

async function bootstrap() {
  const app = await NestFactory.create(ArrayValidationModule);
  await app.listen(3000);
}
bootstrap();
