'use strict';

export default function routes($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/product/:productId', {
      template: '<product></product>'
    });
};