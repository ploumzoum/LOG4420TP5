import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ShoppingCartService } from './shopping-cart.service';

/**
 * Defines the main component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // TODO: Modifier le nom des auteurs pour vos noms
  readonly authors = [
    '',
    'Konstantinos Lambrou-Latreille'
  ];
  // TODO: À compléter
  private  count = 0;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.countChange.subscribe(
      (quantity: number) => {
        console.log(quantity);
        this.count += quantity;
      }
    )
  }
}
