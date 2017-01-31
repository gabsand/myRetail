/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Product from '../api/product/product.model';

Product.find({}).remove()
  .then(() => {
    Product.create({
      itemId: 1840,
      title: 'Ninja\u2122 Professional Blender with Single Serve Blending Cups',
      primaryImageUrl: 'http:\/\/target.scene7.com\/is\/image\/Target\/14263758',
      secondaryImageUrls: [
          'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01',
          'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02',
          'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03',
          'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04',
          'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05',
          'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06',
          'http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07'
      ],
      price: {
          currencyCode: 'USD',
          displayValue: '$139.99',
          value: 13999,
          qualifier: 'Online Price'
      },
      availableOnline: true,
      availableInStore: true
    });
  });
