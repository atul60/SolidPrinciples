import PayPalPaymentProcessor from "./PayPalPaymentProcessor";
import StripePaymentProcessor from "./StripePaymentProcessor";

export default class Store {
  private PaymentProcessor: StripePaymentProcessor | PayPalPaymentProcessor;
  constructor(
    paymentProcessor: StripePaymentProcessor | PayPalPaymentProcessor
  ) {
    this.PaymentProcessor = paymentProcessor;
  }

  PurchaseBike(quantity: number) {
    const bikePrice = 200;
    this.PaymentProcessor.Pay(bikePrice * quantity);
  }

  PurchaseHelmet(quantity: number) {
    const helmetPrice = 15;
    this.PaymentProcessor.Pay(helmetPrice * quantity);
  }
}
