import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { StringCheckModule } from '../src/string-check/string-check.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [StringCheckModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('POST /string-check/result without body', () => {
    return request(app.getHttpServer())
      .post('/string-check/result')
      .expect(400)
  });

  it('POST /string-check/result with incorret body', () => {
    return request(app.getHttpServer())
      .post('/string-check/result')
      .send({data: ''})
      .expect(400)
  });

  it('POST /string-check/result with null body', () => {
    return request(app.getHttpServer())
      .post('/string-check/result')
      .send({data: null})
      .expect(400)
  });

  it('POST /string-check/result with others characters in body', () => {
    return request(app.getHttpServer())
      .post('/string-check/result')
      .send({data: '--fasf;wefwe/'})
      .expect(400)
  });

  it('POST /string-check/result with correct body', () => {
    return request(app.getHttpServer())
      .post('/string-check/result')
      .send({data: 'dasd123484a65sdasd'})
      .expect(201)
  });
  
});
