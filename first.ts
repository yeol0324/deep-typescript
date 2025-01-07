type World = "world" | "hell";
type Greeting = `hello ${World}`;

const a: Greeting = "hello world";

function rest(...args: string[]) {}

const tuple: [string, number] = ["1", 2];
// WARN: Tuple push는 잡지 못함..
// tuple[2]=3 얜 오류!
tuple.push(3);

// enum 자바스크립트로 변환 시 사라짐
const enum EDirection { // 아무값도 주지 않으면 첫번째 숫자부터 순서대로 흘러감
  Up = 5,
  Down, //6
  Left, //7
  Right, //8
}

// as const자바스크립트로 변환 시 남아있음! 객체로 선언(as const)
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; // as const : type을 엄격하게 추론
type Direction = (typeof ODirection)[keyof typeof ODirection];

const aUp: EDirection.Up = 5;
function walk(direction: EDirection) {}
walk(EDirection.Up);

const oUp: Direction = ODirection.Down;
function run(direction: Direction) {}
run(ODirection.Up);

const obj = { a: 1, b: 2, c: 3 };
type Key = keyof typeof obj;

// type으로 type 선언
type A = { a: string; b: number };
const typea: A = { a: "1", b: 2 };

// interface로 type 선언: 상속,implements 등
interface B {
  a: string;
  b: number;
}
const interfaceb: B = { a: "1", b: 2 };

// union | 또는: 사용할 때 신중하자
// function unionAdd(x: number | string, y: number | string): string | number {
//   return x + y;
// }
// const result: string = add(1,2) 이게 성립 됨

// intersection & 그리고: 주로 객체에서 사용
type IntersectionA = { hello: "world" } & { name: "yurim" };
const intersectionA: IntersectionA = {
  // a: "test", Object literal may only specify known properties, and 'a' does not exist in type 'IntersectionA'.
  hello: "world",
  name: "yurim",
};
