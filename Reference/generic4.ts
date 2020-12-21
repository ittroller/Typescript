class MyMap<T> {
  private map: { [key: string]: T } = {};

  getItem(key: string) {
    return this.map[key];
  }

  setItem(key: string, item: T) {
    this.map[key] = item;
  }
  clear() {
    this.map = {};
  }

  printMap() {
    for (let key in this.map) {
      console.log(key + "-" + this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("a", 1);
numberMap.setItem("b", 2);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("a", "1");
stringMap.setItem("b", "2");
stringMap.printMap();

// =======================================

const arrToObj = <T>(arr: T[]): { index: number; value: T }[] => {
  return arr.map((value: T, index: number) => ({ index, value }));
};

const result = arrToObj<string>(["arr1", "arr2", "arr3"]);
console.log(result);
type Test = Record<string, string>;
const result1 = arrToObj<Test>(["arr1", "arr2", "arr3"]); // => lỗi

export {};
