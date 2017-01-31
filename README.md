# myRetail
## About the web app:
* MVP is simply the blender image and buttons for buying in store or adding to the online cart. I wanted to get an end to end realistic scenario where a user would route into the product, then either add it to the cart or click to find it in a store (which is just a stub method).
* Data should be stored in an intuitive way, while still maintaining the level of detail required. I skimped on the detail of the data by adding only some of the fields to the mongo model, but the idea is to be able to insert documents of type 'Product' and then retrieve product of choice. Unit tests and integration tests cover these scenarios.

## Where I left off:
* Carousel for product images is not rigged up properly, so I first need to determine where angular-carousel is not being set properly as a dependency, bind click actions on the carousel to the controller so that the controller can then update the primary image view. Add some animation with ng-animate.
* The mongo db code is not finished. Should implement an API taking in the item-data json, which would call a mapping service to transform the original item-data into the Product data structure. The Product data structure would include all the information from the item-data json, but the names and structure would vary slightly for readability (e.g. eliminate "productPurchaseCode").
* Got stuck on implementing directives with typescript, need to research more so that the controller doesn't handle all the individual component logic. Directives would be reusable on other pages.
* Skimped on unit tests toward the end, but here are the ones I'll implement next:
  * CartService: add to cart and verify count
  * ProductController spy on CartService to make sure it was called with correct info, verify the correct buttons appear based on online/in store availability, verify that controller routes to 404 page by mocking the $http response as an error, verify that product is set when $http response is good, verify productImages count (this method could actually go into a service. Controller should be cleaned up)
* Just discovered angular-aria and would like to explore how to effectively make an app accessible
* Add other features on the page (e.g. product details, reviews)

## If this were a prototype, here's what I'd change for next time:
* Start by thinking about build + test + deployment process and build app from scratch using ideas from the yeoman-generated MEAN stack app (esp. continuously running unit tests as changes are made).
* Separate server-side creating and retrieving products into a different repository for cleaner separation of client and server-side code. Client should be able to set its own models up and only interface with the mongo data structure returned by the server.

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.1.2.
