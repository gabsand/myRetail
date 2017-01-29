'use strict';

var app = require('../..');
import request from 'supertest';

describe('Product API:', function() {
  describe('GET /api/products', function() {
    var products;

    beforeEach(function(done) {
      request(app)
        .get('/api/products')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          products = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      products.should.be.instanceOf(Array);
    });
  });
});
