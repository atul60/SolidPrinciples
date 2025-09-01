// this class acts like the PayPal API
// for examplification only

export class Paypal {
  MakePayment(user: string, amountInDollars: number): void {
    console.log(`${user} made payment of ${amountInDollars}$ with PayPal`);
  }
}
