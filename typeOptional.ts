export {};
//optional
function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 3, 4);

let obj: { a: string; b?: string } = { a: "hello" };
obj = { a: "hello", b: "world" };

//generic
function add<T extends number | string>(x: T, y: T): T {
  //   return x + y;
  return x;
}
add(1, 2);
// add(1, "2"); 매개변수를 같은 타입으로만 강제할 수 있음

function addition<T extends number, K extends string>(x: T, y: K): T {
  //   return x + y;
  return x;
}
addition(1, "2");
// extends 를 사용해서 제네릭에 제한을 주자

function aaa<T extends { a: "hello" }>(x: T): T {
  return x;
}
aaa({ a: "hello" });

function bbb<T extends string[]>(x: T): T {
  return x;
}
bbb(["1", "2"]);

// 여기서 모든 함수를 넣고 싶을 때!! (...args: any)=> any
function ccc<T extends (a: string) => number>(x: T): T {
  return x;
}
ccc((a) => +a);

// class 자체를 넣을 떄
class A {}
function ddd<T extends abstract new (...args: any) => any>(x: T): T {
  return x;
}
ddd(A); // new A() 아님
