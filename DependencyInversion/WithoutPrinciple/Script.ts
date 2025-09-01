import StripeStore from "./StoreAdaptorToStripe";

// this class acts like our app

const storeConnectedToStripe = new StripeStore("John Doe");
storeConnectedToStripe.PurchaseBike(1);
storeConnectedToStripe.PurchaseHelmet(1);

// if we need to change from Stripe to PayPal
// we need to change the dependency 👇

import PayPalStore from "./StoreAdaptorToPaypal";

const storeConnectedToPaypal = new PayPalStore("John Doe");
storeConnectedToPaypal.PurchaseBike(1);
storeConnectedToPaypal.PurchaseHelmet(1);
