export {};
// type 좁히기!! type guard
function numOrStr(a: number | string) {
  // a.toFixed(1)// 얘 불가능
  (a as number).toFixed(1); // 얜 되지만 웬만하면 하지마!
  if (typeof a === "number") {
    a.toFixed(1);
  } else {
    a.charAt(3);
  }
  if (typeof a === "string") {
    a.charAt(3);
  }
  if (typeof a === "boolean") {
    // a 는 never가 됨
  }
}
numOrStr(1);
numOrStr("1");
function numOrArr(a: number | number[]) {
  // a.toFixed(1)// 얘 불가능
  if (Array.isArray(a)) {
    // number[]
    a.concat(4);
  } else {
    //number
    a.toFixed(3);
  }
}
numOrArr(123);
numOrArr([1, 2, 3]);

//class 자체는 type이 됨
class A {
  aaa() {}
}
class B {
  bbb() {}
}
function aOrB(param: A | B) {
  if (param instanceof A) {
    param.aaa();
  }
}
aOrB(new A());

type C = { type: "c"; ccc: string };
type D = { type: "d"; ddd: number };

function typeCheck(a: C | D) {
  if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }
}
function typeCheckIn(a: C | D) {
  // 속성 명으로도 찾을 수 있다!
  if ("ccc" in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}
