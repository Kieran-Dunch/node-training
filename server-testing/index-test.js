const request = require('supertest');

const app = require('../../app');

describe('the homepage', () => {
  it('returns the correct content', () => {
    const response = request(app)
      .get('/')
      .send();
    console.log(response.text);
  });
});
