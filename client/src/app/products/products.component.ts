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
  public categorieChoisie =undefined;
  public classementChoisi =undefined;

  public getProducts(sortingCriteria?: string, category?: string) {
   
    if (sortingCriteria !== undefined) {
      this.classementChoisi = sortingCriteria;
    }
    if (category !== undefined) {
      this.categorieChoisie = category;
    }
    if (category == 'all') {
      this.categorieChoisie = undefined;
    }
    this.productsService.getProducts(this.classementChoisi, this.categorieChoisie).then((products) => this.products = products );
 
  }


}
