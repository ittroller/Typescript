const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 30];

const carA: [number, number] = [1, 2];

const carB = {
  horsepower: 1,
  weight: 2,
};
