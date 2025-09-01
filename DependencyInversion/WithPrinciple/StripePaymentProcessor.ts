import Stripe from "./StripeNew";

// this class acts like the Stripe payment processor (just like a gateway)
// this way, we don't repeat the Store class, but the implementation gateway class
// one per API

export default class StripePaymentProcessor {
  private Stripe: Stripe;
  constructor(user: string) {
    this.Stripe = new Stripe(user);
  }

  Pay(amountInDollars: number): void {
    this.Stripe.MakePayment(amountInDollars * 100);
  }
}
