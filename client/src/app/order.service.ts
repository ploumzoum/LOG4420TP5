import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from './config';

/**
 * Defines an order.
 */

export class Product  {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    features: string[];
  }

export class Order  {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    products: Product[];
  }

/**
 * Defines the service responsible to update the shopping-cart
 */
@Injectable()
export class OrderService {
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
   * Gets all the orders in the shopping-cart.
   * @return {Promise<Order[]>}   A promise that contains the items in the order.
   */
  getOrderContent(): Promise<Order[]> {
    const url = `${Config.apiUrl}/orders`;
    return this.http.get(url)
      .toPromise()
      .then(orders => orders.json() as Order[])
      .catch(OrderService.handleError);
  }

  /**
   * Gets the order associated with the item ID specified.
   *
   * @param orderId               The order ID associated with the item to retrieve.
   * @returns {Promise<item>}    A promise that contains the item associated with the ID specified.
   */
  getOrder(orderId: number): Promise<Order> {
    const url = `${Config.apiUrl}/orders/${orderId}`;
    return this.http.get(url)
      .toPromise()
      .then(order => order.json() as Order)
      .catch(() => null);
  }

  addOrder(order: Order){
    const url = `${Config.apiUrl}/orders`;
    return this.http.post(url, order)
      .toPromise()
      .catch()
      .catch(OrderService.handleError);

  }

  

}


