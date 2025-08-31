import { Question } from "./Question";

export class TextQue implements Question {
  constructor(public description: string) {
    this.description = description;
  }
  printQuestion(): void {
    console.log(this.description);
    console.log("Write your answer here._____________________");
  }
}
