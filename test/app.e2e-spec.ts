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
  it('POST /array-validation/validate without body', () => {
    return request(app.getHttpServer())
      .post('/array-validation/validate')
      .expect(400)
  });
  it('POST /array-validation/validate with incorret body', () => {
    return request(app.getHttpServer())
      .post('/array-validation/validate')
      .send({data: ''})
      .expect(400)
  });
  it('POST /array-validation/validate with null body', () => {
    return request(app.getHttpServer())
      .post('/array-validation/validate')
      .send({data: null})
      .expect(400)
  });
  it('POST /array-validation/validate with others characters in body', () => {
    return request(app.getHttpServer())
      .post('/array-validation/validate')
      .send({data: '--fasf;wefwe/'})
      .expect(400)
  });
  it('POST /array-validation/validate with correct body', () => {
    return request(app.getHttpServer())
      .post('/array-validation/validate')
      .send({data: 'dasd123484a65sdasd'})
      .expect(201)
  });
});
