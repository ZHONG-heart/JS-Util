function freeter(person: string) {
  return "Hello " + person;
}

const user = "123";
const sym1 = Symbol("213");

const max = BigInt(Number.MAX_SAFE_INTEGER);
let a: void;
a = undefined;

let c = null;
let d: null;
d = null;
let aa: unknown;
aa = { dd: 1 };

interface Tuple extends Array<unknown> {
  0: string;
  1: number;
  length: 2;
}

let tt: Tuple = ["s", 1];
tt.push(222);

// enum Direction{
//     UP,
//     Down
// }

// let qq: 0

// qq = Direction.UP

enum Direction {
  Up = "Up",
  Down = 1,
  Left = "Left",
  Right = "Right"
}

enum Direction {
  Center = 1
}

Direction[1] == "Down";

let qq: "Down";
// qq=Direction[1]
