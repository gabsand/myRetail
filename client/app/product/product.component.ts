const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './product.routes';

export class ProductController {
  $http;
  $location;
  $routeParams;
  cartService;
  product;

  productController = this;

  constructor($http, $location, $routeParams, CartService) {
    this.$http = $http;
    this.$location = $location;
    this.$routeParams = $routeParams;
    this.cartService = CartService;
    console.log(CartService);
  }

  $onInit() {
      this.$http.get('/api/products/' + this.$routeParams.productId).then(response => {
          this.product = response.data;
      }, error => {
          this.$location.path('/product-not-found');
      });
  }

  addToCart() {
    this.cartService.AddProductToCart(this.product);
  }

  findInStore() {

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
