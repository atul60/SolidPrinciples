import { NonVegetarianFood } from "./NonVegetarianFood";
import { VegetarianFood } from "./VegetarianFood";

const veg = new VegetarianFood();
const nonveg = new NonVegetarianFood();

console.log(veg.vegetarianItems());
// console.log(veg.nonVegetarianItems());
console.log(nonveg.nonVegetarianItems());
