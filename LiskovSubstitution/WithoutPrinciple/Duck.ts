import { Bird } from "./Bird";

export class Duck extends Bird {
  public quack(): void {
    console.log("Quack, quack!");
  }
}
