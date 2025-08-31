import { Question } from "./Question";

export class BooleanQue implements Question {
  private description: string;
  constructor(description: string) {
    this.description = description;
  }

  printQuestion(): void {
    console.log(this.description);
    console.log("1. True");
    console.log("2. False");
  }
}
