import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from './config';

/**
 * Defines a shopping-cart Item.
 */
export class Item  {
  productId: number;
  quantity: number;
}


/**
 * Defines the service responsible to update the shopping-cart
 */
@Injectable()
export class ShoppingCartService {
    public countChange = new EventEmitter();


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
   * Gets all the items in the shopping-cart.
   * @return {Promise<Item[]>}   A promise that contains the items in the shopping-cart.
   */
  getCartContent(): Promise<Item[]> {
    const url = `${Config.apiUrl}/shopping-cart`;
    return this.http.get(url)
      .toPromise()
      .then(products => products.json() as Item[])
      .catch(ShoppingCartService.handleError);
  }

  /**
   * Gets the item associated with the item ID specified.
   *
   * @param productId               The product ID associated with the item to retrieve.
   * @returns {Promise<item>}    A promise that contains the itam associated with the ID specified.
   */
  getItem(productId: number): Promise<any> {
    const url = `${Config.apiUrl}/shopping-cart/${productId}`;
    return this.http.get(url)
      .toPromise()
      .then(item => item.json())
      .catch(() => null);
  }

  /**
   * Add the item associated with the item ID specified and quantity to the shopping-cart.
   *
   * @param productId            The product ID associated with the item to add.
   * @param quantity             The quantity associated with the item to add.
   * @returns {Promise<item>}    A promise that contains the itam associated with the ID specified.
   */
  addItem(productId: number, quantity: number) {
    console.log("Hi there");
    const url = `${Config.apiUrl}/shopping-cart`;
    const body = {productId : productId, quantity : quantity};
    return this.http.post(url, body)
      .toPromise()
      .then(() => this.countChange.emit(quantity))
      .catch(ShoppingCartService.handleError);
  }
}
