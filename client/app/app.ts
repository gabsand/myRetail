'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');

const ngRoute = require('angular-route');

const uiBootstrap = require('angular-ui-bootstrap');

import {routeConfig} from './app.config';


import main from './main/main.component';
import product from './product/product.component';
import constants from './app.constants';
import services from './services/cart.service';
import util from '../components/util/util.module';

import './app.scss';

angular.module('myRetailApp', [
  ngCookies,
  ngResource,
  ngSanitize,
  ngRoute,
  uiBootstrap,
  main,
  product,
  constants,
  services,
  util
])
  .config(routeConfig)
;

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['myRetailApp'], {
      strictDi: true
    });
  });
