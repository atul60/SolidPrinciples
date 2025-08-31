interface Question {
  Type: QuestionType;
  Description: string;
  Options?: string[];
}

type QuestionType = "boolean" | "multipleChoice" | "text" | "range";

function PrintQuiz(questions: Question[]) {
  questions.forEach((question) => {
    console.log(question.Description);

    // when you see a switch, you automacally can assume that the open/closed principle is being violated
    switch (question.Type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.Options?.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Write your answer here._____________________");
        break;
      case "range":
        console.log("Max: ____");
        console.log("Min: ____");
        break;
    }
  });
}

const questions: Question[] = [
  {
    Type: "boolean",
    Description: "This code is awesome!",
  },
  {
    Type: "multipleChoice",
    Description: "What is your favourite language?",
    Options: ["C#", "SQL", "Javascript", "Python"],
  },
  {
    Type: "text",
    Description: "Describe your favourite JS feature.",
  },
  {
    Type: "range",
    Description: "What is the speed limit in your city?",
  },
];

// if we need to add a new type, we need to do the following:
// 1. create the type in the questions array
// 2. modify the giant switch statement to have the new type and do the business logic inside it

PrintQuiz(questions);
