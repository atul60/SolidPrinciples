import { Stripe } from "./Stripe";

// with the code like this, we need to have our code coupled to the Stripe logic
// and force us to create as many Store classes as APIs that we need to use

export default class Store {
  private user: string;
  private stripe: Stripe;
  constructor(user: string) {
    this.user = user;
    this.stripe = new Stripe(user);
  }

  PurchaseBike(quantity: number) {
    const bikePrice = 20; // prince in Dollars
    this.stripe.MakePayment(quantity * bikePrice * 100);
  }

  PurchaseHelmet(quantity: number) {
    const helmetPrice = 10; // prince in Dollars
    this.stripe.MakePayment(quantity * helmetPrice * 100);
  }
}
