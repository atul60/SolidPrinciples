import { Question } from "./Question";

export class MultipleChoiceQue implements Question {
  description: string;
  options: string[];

  constructor(description: string, options: string[]) {
    this.description = description;
    this.options = options;
  }

  printQuestion(): void {
    console.log(this.description);
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}
