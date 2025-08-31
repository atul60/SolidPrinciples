import { Duck } from "./DuckNew";
import { Penguine } from "./PenguineNew";

function makeBirdFly(bird) {
  bird.fly();
}

function makeBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguine = new Penguine();

makeBirdFly(duck);
makeBirdSwim(penguine);

// however this is not the perfect solution
// because a duck can swim and fly
// but in OOP, we can't inherit from multiple classes
