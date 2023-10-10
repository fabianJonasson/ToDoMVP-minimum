const { application, json } = require('express');
const app = require('./app');
const supertest = require('supertest');

test('GET / returns status 200 OK', done => {
    supertest(app)
    .get('/')
    .expect(200)
    .end(done);
});

test('GET /todo returns with array "tasks"', async() => {
    const response = await supertest(app).get('/todo');
    const tasks = JSON.parse(response.text);
    expect(tasks).toEqual(
        [{description: "task 1", done: false},
        {description: "task 2", done: false}]
    );
});

test('array "tasks" is array in JSON format', async() => {
    const response = await supertest(app).get('/todo');
    const tasks = JSON.parse(response.text);
    expect(Array.isArray(tasks)).toBeTruthy()
});

test('GET /jibberish', done => {
    supertest(app)
    .get('/dafwedsvgsa')
    .expect(404)
    .end(done);
});