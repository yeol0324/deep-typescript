export {};
// 타입 좁히기
type A = string | number; // 넓은 타입
type B = string; // 좁은 타입

// 객체는 속성이 적을 수록 넓은 타입이 됨

type AA = { name: string };
type BB = { age: number };
type AB = AA | BB; // 당연히 얘가 젤 넓은 타입

type CC = { name: string; age: number };
// = type CC = AA & BB

const ab: AB = { name: "yurim", age: 26 };
// const c: CC = ab 같은 의미이지만 대입 불가
const c: CC = { name: "yurim", age: 26 };

// 주의 잉여 속성은 검사하면서
// const objCC: CC = { name: "yurim", age: 26, male: "f" };

const obj = { name: "yurim", age: 26, male: "f" };
const objC: CC = obj; // 이게 되어버림..
