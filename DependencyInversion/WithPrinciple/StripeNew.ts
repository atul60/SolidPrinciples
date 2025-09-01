// this class acts like the Stripe API
// for examplification only

export default class Stripe {
  private user: string;
  constructor(user: string) {
    this.user = user;
  }

  MakePayment(amountInCents: number) {
    console.log(
      `${this.user} made payment of ${amountInCents / 100}$ with Stripe`
    );
  }
}
