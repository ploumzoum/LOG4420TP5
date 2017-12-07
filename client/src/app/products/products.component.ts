import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from './../products.service';
/**
 * Defines the component responsible to manage the display of the products page.
 */
@Component({
  selector: 'products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  // TODO: À compléter
  private products = [];
  constructor(private productsService: ProductsService) {
  }
  public categorieChoisie =undefined;
  public classementChoisi ='price-asc';

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

  ngOnInit() {
    this.productsService.getProducts().then((products) => {this.products = products;
    });
  }
}
