const profile = {
  name: "Sagar",
  age: 32,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age } = profile;
console.log(age);
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
console.log(lat);
console.log(lng);
