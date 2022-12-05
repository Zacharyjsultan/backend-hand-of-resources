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
  it('#GET /shoes/:id displays single shoe', async () => {
    const res = await request(app).get('/shoes/1');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: '1',
      brand: 'Converse',
      sole: 'vulcanized',
      cost: 60,
    });
  });

  it('#POST /shoes/ adds new shoes', async () => {
    const newShoe = {
      brand: 'Emerica',
      sole: 'vulcanized',
      cost: 65,
    };
    const res = await request(app).post('/shoes').send(newShoe);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newShoe,
    });
  });
  it('#PUT /shoe/:id updates single shoes', async () => {
    const res = await request(app).put('/shoes/1').send({ sole: 'vulcanized' });
    expect(res.status).toBe(200);
    expect(res.body.weight).toBe('vulcanized');
  });

  it('#DELETE /shoes/:id deletes single shoes', async () => {
    const res = await request(app).delete('/shoes/1');
    expect(res.status).toBe(200);

    const shoesResp = await request(app).get('/shoes/1');
    expect(shoesResp.status).toBe(404);
  });
});
afterAll(() => {
  pool.end();
});
