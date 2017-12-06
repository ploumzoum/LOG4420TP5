import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ShoppingCartService } from './shopping-cart.service';

/**
 * Defines the main component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // TODO: Modifier le nom des auteurs pour vos noms
  readonly authors = [
    '',
    'Konstantinos Lambrou-Latreille'
  ];
  // TODO: À compléter
  private count: number;
  private isWorthToSee: boolean;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.countChange.subscribe(
      (quantity: number) => {
        console.log(quantity);
        this.count += quantity;
        this.isWorthToSee = (this.count > 0) ? true : false;
      });
  }

  /**
   * Occurs when the component is initialized.
   */
  ngOnInit() {
    this.isWorthToSee = false;
    this.count = 0;
  }
}
