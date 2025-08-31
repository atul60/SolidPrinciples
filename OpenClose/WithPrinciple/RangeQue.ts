import { Question } from "./Question";

export class RangeQue implements Question {
  Description: string;

  constructor(description: string) {
    this.Description = description;
  }

  printQuestion(): void {
    console.log(this.Description);
    console.log("Max: ____");
    console.log("Min: ____");
  }
}
