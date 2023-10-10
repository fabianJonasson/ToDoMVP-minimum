const { application, json } = require('express');
const app = require('./app');
const supertest = require('supertest');
const tasks = require('./routes/index').tasks;

test('GET / returns status 200 OK', done => {
    supertest(app)
    .get('/')
    .expect(200)
    .end(done);
});

test('GET / returns with array "tasks"', done => {
    supertest(app)
    .get('/')
    .expect(200, tasks)
    .end(done);
});

test('array tasks is in JSON format', done => {
    supertest(app)
    .get('/')
    .expect(200, typeof tasks == application/json)
    .end(done);
});