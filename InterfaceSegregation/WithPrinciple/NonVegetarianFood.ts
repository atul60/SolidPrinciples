import { INonVegFood } from "./Food";

export class NonVegetarianFood implements INonVegFood {
  nonVegetarianItems() {
    return ["Steak", "Pork", "Chicken"];
  }
}
