export {};
// readonly, indexed, mapped

interface A {
  readonly a: string;
  b: string;
}
const a: A = { a: "hello", b: "world" };
// a.a ='123' readonly 로 사용해서 이게안됨

//모든 값이 같았으면 좋겠다 인덱스드 시그니쳐
type Key = "Human" | "Mammal";
// [] mapped type
type B = { [key in Key]: number };
const b: B = { Human: 1, Mammal: 2 };
