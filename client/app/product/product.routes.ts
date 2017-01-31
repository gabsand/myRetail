'use strict';

export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/product/:productId', {
      template: '<product></product>'
    })
    .when('/product-not-found', {
      template: '<div> This product could not be found. </div>' 
    });
};