import { Bird } from "./Bird";
import { Duck } from "./Duck";
import { Penguine } from "./Penguine";

interface IMakeBirdFly extends Bird {}

function makeBirdFly(bird: IMakeBirdFly) {
  bird.fly();
}

const duck = new Duck();
const penguine = new Penguine();

makeBirdFly(duck);
makeBirdFly(penguine);
