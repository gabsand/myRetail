'use strict';

import main from './main.component';
import {MainController} from './main.component';

describe('Component: MainComponent', function() {

  beforeEach(angular.mock.module(main));

  var scope;
  var mainComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/products')
        .respond(['Product One','Product Two', 'Product Red', 'Product Blue']);

      scope = $rootScope.$new();
      mainComponent = $componentController('main', {
        $http: $http,
        $scope: scope
      });
  }));

  it('should contain a page title of "Products"', function () {
    expect(mainComponent.pageTitle).toBe('Products');
  });

  describe('onInit', function () {
    it('should attach to the controller a list of products containing 4 products', function () {
      mainComponent.$onInit();
      $httpBackend.flush();
      expect(mainComponent.products.length).toBe(4);
    });
  });

});
