import { IFood } from "./Food";

export class NonVegetarianFood implements IFood {
  vegetarianItems() {
    return null;
  }
  nonVegetarianItems() {
    return ["Steak", "Pork", "Chicken"];
  }
}
