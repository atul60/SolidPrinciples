import { BooleanQue } from "./BooleanQue";
import { MultipleChoiceQue } from "./MultipleChoiceQue";
import { RangeQue } from "./RangeQue";
import { TextQue } from "./TextQue";

type TAllQueType = BooleanQue | MultipleChoiceQue | RangeQue | TextQue;

function PrintQuizNew(questions: TAllQueType[]) {
  questions.forEach((question) => {
    question.printQuestion();
  });
}
const questionsNew: TAllQueType[] = [
  new BooleanQue("This code is awesome!"),
  new MultipleChoiceQue("What is your favourite language?", [
    "C#",
    "SQL",
    "Javascript",
    "Python",
  ]),
  new TextQue("Describe your favourite JS feature."),
  new RangeQue("What is the speed limit in your city?"),
];

PrintQuizNew(questionsNew);
