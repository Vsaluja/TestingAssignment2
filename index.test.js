const { app, connection } = require('./index');
const request = require('supertest');


describe('Testing the api endpoint', () => {
    test('should return the list of all the artists', async () => {
        const response = await request(app).get('/api/artists')

        expect(response.statusCode).toBe(200);
        connection.close();
    });
})