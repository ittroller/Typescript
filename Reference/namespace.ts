namespace MyMath {
  const PI = 3.14;
  export function calcCircle(a: number): number {
    return a * PI;
  }

  export function calcRectangle(w: number, h: number): number {
    return w * h;
  }
}

console.log(MyMath.calcCircle(2));
