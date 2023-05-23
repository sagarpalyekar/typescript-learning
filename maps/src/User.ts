import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export const red = "red";
export default "red"; //! Convention: do not use default export statements

// import faker from "faker";
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(), //parseFloat(),
    };
  }

  public display() {
    console.log(this.name);
    console.log(this.location);
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
