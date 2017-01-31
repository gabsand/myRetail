export class CartService {
    private products = [];
    
    public AddProductToCart(product: any): void {
        console.log(product);
        this.products.push(product);
    }
    
    public GetProductsInCart(): any[] {
        return this.products;
    }
}

export default angular.module('myRetailApp.services', [])
    .service('CartService', [() => new CartService()])
    .name;