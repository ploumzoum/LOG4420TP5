import { Component } from '@angular/core';
import { ShoppingCartService, Item } from './../shopping-cart.service';
/**
 * Defines the component responsible to manage the shopping cart page.
 */
@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {
  // TODO: À compléter
  private CartContent: Array<Item>;
  constructor(private shoppinCartService: ShoppingCartService) {
    this.shoppinCartService.getCartContent().then((content) => {this.CartContent = content;
    });
  }
}
