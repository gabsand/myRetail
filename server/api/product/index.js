'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/', controller.getProducts);
router.get('/:id', controller.getProduct);

module.exports = router;