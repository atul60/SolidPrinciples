// with the code like this, we need to have our code coupled to the PayPal logic
// and force us to create as many Store classes as APIs that we need to use

import { Paypal } from "./Paypal";

export default class Store {
  private user: string;
  private paypal: Paypal;
  constructor(user: string) {
    this.user = user;
    this.paypal = new Paypal();
  }

  PurchaseBike(quantity: number) {
    const bikePrice = 20; // prince in Dollars
    this.paypal.MakePayment(this.user, quantity * bikePrice);
  }

  PurchaseHelmet(quantity: number) {
    const helmetPrice = 10; // prince in Dollars
    this.paypal.MakePayment(this.user, quantity * helmetPrice);
  }
}
