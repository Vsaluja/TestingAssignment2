const app = require('./index');
const request = require('supertest');

test('should return the list of all the artists', async () => {
    const response = await request(app).get('/api/artists')

    expect(response.statusCode).toBe(200);
});