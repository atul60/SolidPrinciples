import { FlyingBird } from "./FlyingBird";
import { SwimmingBird } from "./SwimmingBird";

export class Duck extends FlyingBird {
  public quack(): void {
    console.log("Quack, quack!");
  }
}
