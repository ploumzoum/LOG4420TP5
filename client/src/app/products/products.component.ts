import { Component } from '@angular/core';
import { ProductsService, Product } from './../products.service';
import { Http } from '@angular/http';
/**
 * Defines the component responsible to manage the display of the products page.
 */
@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  // TODO: À compléter
  public products: Array<Product>;
  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().then((products) => {this.products = products;
      console.log(this.products);
    });
  }
  public getProducts(sortingCriteria?: string, category?: string) {
    this.productsService.getProducts(sortingCriteria, category).then((products) => this.products = products );
  }


}
