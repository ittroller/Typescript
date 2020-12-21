/*
The Singleton class defines the `getInstance` method that lets clients access the unique singleton instance.
 */

// abstract class A {
//   abstract logA(): void;
// }

class Singleton {
  private static instance: Singleton;

  /*
    The Singleton's constructor should always be private to prevent direct construction calls with the `new` operator.
   */
  private constructor() {}

  /*
    The static method that controls the access to the singleton instance.
    This implementation let you subclass the Singleton class while keeping just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   *  addition of two numbers
   */
  public addition(first: number, second: number) {
    return first + second;
  }

  /**
   * substraction of two numbers
   */
  public substraction(first: number, second: number) {
    return first - second;
  }

  /**
   * multiplication of two numbers
   */
  public multiplication(first: number, second: number) {
    return first * second;
  }
}

/**
 * The client code.
 */
function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }

  console.log(s1.addition(10, 20));
  console.log(s2.addition(10, 10));
  console.log(s2.substraction(20, 10));
  console.log(s1.multiplication(10, 20));
}

clientCode();

export {};
