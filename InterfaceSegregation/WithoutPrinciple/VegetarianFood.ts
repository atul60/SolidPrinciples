import { IFood } from "./Food";

export class VegetarianFood implements IFood {
  vegetarianItems() {
    return ["Broccoli", "Spinach", "Kale"];
  }
  nonVegetarianItems() {
    return null;
  }
}
