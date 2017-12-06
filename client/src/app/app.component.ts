import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

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
  
  public updateCount(countDiff: number) {
    this.count = countDiff;
    console.log("sdfqsfqsfqfdfq");
  }
}
