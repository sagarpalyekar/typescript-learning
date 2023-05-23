/* class Vehicle {
  color: string = "red";

  constructor(color: string) {
    this.color = color;
  }

  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  protected honk(): void {
    console.log("beep");
  }
} */

class Vehicle {
  constructor(public color: string) {}

  // public drive(): void {
  //   console.log("chugga chugga");
  // }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("Orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // Overrides method of the parent class
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const Lamborghini = new Car(4, "Grey");
Lamborghini.startDrivingProcess();
// Lamborghini.honk();
