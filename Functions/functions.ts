const add = (a: number, b: number): number => {
  return a + b;
};

function add1(a: number, b: number): number {
  return a + b;
}

const add2 = function (a: number, b: number) {
  return a + b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// ----- destructing with annotations
const todayWeather = {
  date: new Date(),
  weather: " sunny",
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);

const funcX = (start: number = 1): number => {
  return start;
};

const funcY = (start: number = 1, end: number = start + 1): number => {
  return start * end;
};

console.log(funcY(2));
console.log(funcY(2, 3));
