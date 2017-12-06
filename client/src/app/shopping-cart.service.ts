import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from './config';



/**
 * Defines the service responsible to update the shopping-cart
 */
@Injectable()
export class ShoppingCartService {
     /**
   * Handles the current error.
   *
   * @param error                   The error to handle.
   * @return {Promise<object>}      A promise object.
   */
  private static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.feedbackMessage || error);
  }
    /**
   * Initializes a new instance of the ShoppingCartService class.
   *
   * @param http                    The HTTP service to use.
   */
  constructor(private http: Http) { }

  /**
   * Gets all the products in the database.
   *
   * @param [sortingCriteria]       The sorting criteria to use. If no value is specified, the list returned isn't sorted.
   * @param [category]              The category of the product. The default value is "all".
   * @return {Promise<Product[]>}   The category of the product. The default value is "all".
   */
  getCartContent(): Promise<any> {
    let url = `${Config.apiUrl}/shopping-cart`;
    return this.http.get(url)
      .toPromise()
      .then(products => products.json())
      .catch(ShoppingCartService.handleError);
  }
}
