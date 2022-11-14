const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('shoes routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /shoes displays list of shoes', async () => {
    const res = await request(app).get('/shoes');
    expect(res.status).toBe(200);
    expect(res.body.length === 4);
  });
});
afterAll(() => {
  pool.end();
});
