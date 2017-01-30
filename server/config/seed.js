/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
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

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

