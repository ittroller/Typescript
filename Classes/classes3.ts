class Plant {
  private _species: string = "default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 1) {
      this._species = value;
    } else {
      this._species = "ABC";
    }
  }
}

let plant = new Plant();

console.log(plant.species);

plant.species = "123";
console.log(plant.species);

plant.species = "1";
console.log(plant.species);

console.log("STATIC PROPERTIES AND METHODS ----------------------------");

/*
ERROR

class Helpers {
  PI: number = 3.14;
}
console.log(2 * Helpers.PI);
*/

class Helpers1 {
  static PI: number = 3.14;
}
console.log(2 * Helpers1.PI);

class Helpers2 {
  static PI: number = 3.14;
  static calcMethods(x: number) {
    return this.PI * x;
  }
}
console.log(3 * Helpers2.PI);
console.log(Helpers2.calcMethods(2));
