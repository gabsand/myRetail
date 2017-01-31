const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './product.routes';

export class ProductController {
  $http;
  $location;
  $routeParams;
  cartService;
  product;
  productImages;
  currentDisplayImage;

  productController = this;

  constructor($http, $location, $routeParams, CartService) {
    this.$http = $http;
    this.$location = $location;
    this.$routeParams = $routeParams;
    this.cartService = CartService;
  }

  $onInit() {
      this.$http.get('/api/products/' + this.$routeParams.productId).then(response => {
          this.product = response.data;
          this.productImages = this.getProductImages(this.product);
          this.currentDisplayImage = this.product.primaryImageUrl;
      }, error => {
          this.$location.path('/product-not-found');
      });
  }

  getProductImages(product) {
    var productImages = [];
    productImages.push.apply(productImages, product.secondaryImageUrls);
    productImages.push(product.primaryImageUrl);
    return productImages;
  }

  addToCart() {
    this.cartService.AddProductToCart(this.product);
  }

  findInStore() {
    // stub
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
