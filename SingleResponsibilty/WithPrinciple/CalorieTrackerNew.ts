import Message from "./Message";

// now this class only does stuff related to calories

class CalorieTrackerNew {
  private currentCalories: number;
  log: Message;

  constructor(public maxCalories: number) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
    this.log = new Message();
  }

  get getCurrentCalories(): number {
    return this.currentCalories;
  }

  trackCalories(calories: number) {
    this.currentCalories += calories;
    if (this.currentCalories > this.maxCalories) {
      this.currentCalories = this.maxCalories;
      this.log.logMessage(`Max calories reached.`);
    } else {
      this.log.logMessage(`Current calories: ${this.currentCalories}`);
    }
  }
}

const calorieTracker = new CalorieTrackerNew(200);
calorieTracker.trackCalories(100);
calorieTracker.trackCalories(100);
calorieTracker.trackCalories(100);
