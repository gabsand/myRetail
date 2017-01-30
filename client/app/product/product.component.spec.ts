'use strict';

import product from './product.component';
import {ProductController} from './product.component';

describe('Component: ProductComponent', function() {

  beforeEach(angular.mock.module(product));

  var scope;
  var productComponent;
  var $httpBackend;

  describe('onInit', function () {
    describe('when product is successfully returned from the server', function () {
      beforeEach(inject(function (
        _$httpBackend_,
        $http,
        $componentController,
        $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/product/123')
          .respond({ title: 'Best Blender' });

        scope = $rootScope.$new();
        productComponent = $componentController('product', {
          $http: $http,
          $routeParams: { productId: 123 },
          $scope: scope
        });
      }));

      it('should attach the product to the controller', function () {
        productComponent.$onInit();
        $httpBackend.flush();
        expect(productComponent.product.title).toBe('Best Blender');
      });
    });

    describe('when no product is returned from the server', function () {
      beforeEach(inject(function (
        _$httpBackend_,
        $http,
        $componentController,
        $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/product/123')
          .respond(404, '');

        scope = $rootScope.$new();
        productComponent = $componentController('product', {
          $http: $http,
          $routeParams: { productId: 123 },
          $scope: scope
        });
      }));

      it('should not attach a product to the controller', function () {
        productComponent.$onInit();
        $httpBackend.flush();
        expect(productComponent.product).not.toBeDefined();
      });
    });
  });
});
