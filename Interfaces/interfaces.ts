const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const longVehicle = {
  name: "longVehicle",
  year: 1000,
  broken: true,
  summary(): string {
    return this.name;
  },
};

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

printVehicle(oldCivic);

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
  console.log(vehicle.summary());
};

printVehicle1(longVehicle);

// -----

interface User {
  age: string;
  showAge(): string;
}

const people1 = {
  age: "10",
  showAge(): string {
    return `abc ${this.age}`;
  },
};

const printUser = (user: User): void => {
  console.log(user.showAge());
};

printUser(people1);

export {};
