'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var productCtrlStub = {
  getProducts: 'productCtrl.getProducts',
  getProduct: 'productCtrl.getProduct',
  createProduct: 'productCtrl.createProduct'
};

var routerStub = {
  get: sinon.spy(),
  post: sinon.spy()
};

var productIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './product.controller': productCtrlStub
});

describe('Product API Router:', function() {
  it('should return an express router instance', function() {
    productIndex.should.equal(routerStub);
  });

  describe('GET /api/products', function() {
    it('should route to product.controller.getProducts', function() {
      routerStub.get
        .withArgs('/', 'productCtrl.getProducts')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/products/:id', function() {
    it('should route to product.controller.getProduct', function() {
      routerStub.get
        .withArgs('/:id', 'productCtrl.getProduct')
        .should.have.been.calledOnce;
    });
  });
  
  describe('POST /api/products/', function() {
    it('should route to product.controller.createProduct', function() {
      routerStub.post
        .withArgs('/', 'productCtrl.createProduct')
        .should.have.been.calledOnce;
    });
  });
});
