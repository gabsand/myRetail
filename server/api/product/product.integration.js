'use strict';

var app = require('../..');
import request from 'supertest';

describe('Product API:', function() {
    var newProduct;
    
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

    describe('POST /api/products', function() {
        beforeEach(function(done) {
        request(app)
            .post('/api/products')
            .send({
                itemId: 1840,
                title: 'Ninja\u2122 Professional Blender with Single Serve Blending Cups',
                primaryImageUrl: 'http:\/\/target.scene7.com\/is\/image\/Target\/14263758',
                secondaryImageUrls: [
                    'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01',
                    'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02',
                    'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03',
                    'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04',
                    'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05',
                    'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06',
                    'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07'
                ],
                price: {
                    currencyCode: 'USD',
                    displayValue: '$139.99',
                    value: 13999,
                    qualifier: 'Online Price'
                },
                availableOnline: true,
                availableInStore: true
            })
            .expect(201)
            .expect('Content-Type', /json/)
            .end((err, res) => {
            if(err) {
                return done(err);
            }
            newProduct = res.body;
            done();
            });
        });
        
        it('should respond with the newly created product', function() {
            newProduct.itemId.should.equal(1840);
        });
    });
    
    describe('GET /api/products/:id', function() {
    var product;

    beforeEach(function(done) {
      request(app)
        .get(`/api/products/1840`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          product = res.body;
          done();
        });
    });

    afterEach(function() {
      product = {};
    });

    it('should respond with the requested product', function() {
      product.itemId.should.equal(1840);
    });
  });
});
