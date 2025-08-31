import { Bird } from "./Bird";

export class Penguine extends Bird {
  fly() {
    throw new Error("I can't fly");
  }

  swim() {
    console.log("I am swimming");
  }
}
