class Collection {
  private _things: string[];
  private _thingsAny: any[];

  constructor() {
    this._things = [];
    this._thingsAny = [];
  }

  add(something: string) {
    this._things.push(something);
  }

  addAny(something: any) {
    this._thingsAny.push(something);
  }

  get(index: number): string {
    return this._things[index];
  }
  getAny(index: number): string {
    return this._thingsAny[index];
  }

  show(): string[] {
    return this._things;
  }
  showAny(): string[] {
    return this._thingsAny;
  }
}

const col = new Collection();
col.add("A");
col.add("B");
col.add("C");
// console.log(col.show());
// console.log(col.get(0));

// all item in array should be string

// ---
const col1 = new Collection();
col1.addAny("A");
col1.addAny(123);
col1.addAny(false);
console.log(col1.showAny());
console.log(col1.getAny(1).length);

// lúc này ts k hiểu kiểu dữ liệu của các item trong mảng để .length cho đúng
