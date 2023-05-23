/** ------------------ Class Generics -------------------- **/

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfString = new ArrayOfAnything<string>(["a", "b", "c"]);
console.log(arrayOfString);
const arrayOfStringInference = new ArrayOfAnything(["a", "b", "c"]); // Inference
console.log(arrayOfString);

/** ----------------- Function Generics ------------------ **/

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]); // Good practice to follow
printAnything(["a", "b", "c"]);

/** **/
class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<string>([1, 2, 3, 4]); // Type doesn't matches
printHousesOrCars<House>([new House(), new House(), new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car(), new Car(), new Car()]);
