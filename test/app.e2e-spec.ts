import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ArrayValidationModule } from '../src/array-validation/array-validation.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ArrayValidationModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/array-validation-post (POST)', () => {
    return request(app.getHttpServer())
      .post('/array-validation/validate')
      .expect(201)
  });
});
