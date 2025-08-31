class CalorieTracker {
  private currentCalories: number;

  constructor(public maxCalories: number) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  get getCurrentCalories(): number {
    return this.currentCalories;
  }

  trackCalories(calories: number) {
    this.currentCalories += calories;
    if (this.currentCalories > this.maxCalories) {
      this.currentCalories = this.maxCalories;
      this.logCalorieTracker();
    } else {
      console.log(`Current calories: ${this.currentCalories}`);
    }
  }

  // this code is violating the single responsability principle
  // because the responsability to log a message is not from CalorieTracker class
  logCalorieTracker() {
    console.log(`Max calories reached.`);
  }
}

const calories = new CalorieTracker(200);
calories.trackCalories(100);
calories.trackCalories(100);
calories.trackCalories(100);
