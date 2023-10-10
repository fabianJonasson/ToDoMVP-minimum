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
