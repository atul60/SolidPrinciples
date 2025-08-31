import { IVegFood } from "./Food";

export class VegetarianFood implements IVegFood {
  vegetarianItems() {
    return ["Broccoli", "Spinach", "Kale"];
  }
}
