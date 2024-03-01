const { app, connection } = require('./index');
const request = require('supertest');


describe('Testing the api endpoint', () => {
    test('should return the list of all the artists', async () => {
        const response = await request(app).get('/api/artists')

        expect(response.statusCode).toBe(200);
        connection.close();
    });

    test('should return the list of all the themes', async () => {
        const response = await request(app).get('/api/themes')
        expect(response.statusCode).toBe(200);
        connection.close();
    });

    test('should return the list of all mediatypes', async () => {
        const response = await request(app).get('/api/mediatypes')
        expect(response.statusCode).toBe(200);
        connection.close();
    });

    test('should return the list of all albums', async () => {
        const response = await request(app).get('/api/albums/1')
        expect(response.statusCode).toBe(200);
        connection.close();
    });
    test('should return the list of all mediatypes', async () => {
        const response = await request(app).get('/api/tracks/1')
        expect(response.statusCode).toBe(200);
        connection.close();
    });


})