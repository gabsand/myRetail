const angular = require('angular');
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
  $http;
  pageTitle = 'Products';
  products = [];

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/products').then(response => {
      this.products = response.data;
    });
  }
}

export default angular.module('myRetailApp.main', [
  ngRoute])
    .config(routing)
    .component('main', {
      template: require('./main.html'),
      controller: MainController
    })
    .name;
