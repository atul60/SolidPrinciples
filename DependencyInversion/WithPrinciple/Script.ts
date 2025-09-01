import PayPalPaymentProcessor from "./PayPalPaymentProcessor";
import Store from "./Store";
import StripePaymentProcessor from "./StripePaymentProcessor";

// this class acts like our app

const paymentProcessorNew = new StripePaymentProcessor("John");
const storeNew = new Store(paymentProcessorNew);
storeNew.PurchaseBike(2);
storeNew.PurchaseHelmet(2);

// if we need to change from Stripe to PayPal
// we just need to inject the dependency inside of our store 👇

const paymentProcessor = new PayPalPaymentProcessor("John");
const store = new Store(paymentProcessor);
store.PurchaseBike(2);
store.PurchaseHelmet(2);

// and everything works well
