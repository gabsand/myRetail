const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './product.routes';

export class ProductController {
  $http;
  $location;
  $routeParams;
  product;

  productController = this;

  constructor($http, $location, $routeParams) {
    this.$http = $http;
    this.$location = $location;
    this.$routeParams = $routeParams;
  }

  $onInit() {
      this.$http.get('/api/product/' + this.$routeParams.productId).then(response => {
          this.product = response.data;
      }, error => {
          this.$location.path('/404');
      });
  }
}

export default angular.module('myRetailApp.product', [
  ngRoute])
    .config(routing)
    .component('product', {
      template: require('./product.html'),
      controller: ProductController
    })
    .name;
