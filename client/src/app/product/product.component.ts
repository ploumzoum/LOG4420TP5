import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from './../products.service';
import { ShoppingCartService } from './../shopping-cart.service';

/**
 * Defines the component responsible to manage the product page.
 */
@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  private product = new Product;
  private productQuantity = 1;
 
  /**
   * Initializes a new instance of the ProductComponent class.
   *
   * @param route                   The active route.
   */
  constructor(private route: ActivatedRoute, private productsService: ProductsService, priv) { }

  public addToCart() {
    console.log(this.productQuantity);
  }
  /**
   * Occurs when the component is initialized.
   */
  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('id');
    // TODO: Compléter la logique pour afficher le produit associé à l'identifiant spécifié (productId).
    this.productsService.getProduct(productId).then((product) => {this.product = product;
      console.log(this.product);
    });
  }
}