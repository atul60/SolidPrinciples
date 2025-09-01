import PayPal from "./PaypalNew";

// this class acts like the PayPal payment processor (just like a gateway)
// this way, we don't repeat the Store class, but the implementation gateway class
// one per API

export default class PayPalPaymentProcessor {
  private User: string;
  private PayPal: PayPal;
  constructor(user: string) {
    this.User = user;
    this.PayPal = new PayPal();
  }

  Pay(amountInDollars: number): void {
    this.PayPal.MakePayment(this.User, amountInDollars);
  }
}
