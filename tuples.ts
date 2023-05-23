const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

type Drink = [string, boolean, number];
const Pepsi: Drink = ["brown", true, 40];
const Sprite: Drink = ["clear", true, 50];
const Tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354,
};
