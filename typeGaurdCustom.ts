export {};
// custom typeguard
// return 값에 is 사용해서 타입을 구분해주는 커스텀 함수를 직접 만들기
interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
function catOfDog(a: Cat | Dog): a is Dog {
  //타입 판별 만들기
  if ((a as Cat).meow) return false;
  return true;
}
const cat: Cat | Dog = { meow: 3 };

if (catOfDog(cat)) {
  console.log(cat.meow);
}
if ("meow" in cat) {
  console.log(cat.meow);
}
function pet(a: Cat | Dog) {
  if (catOfDog(a)) {
    console.log(a.bow);
  }
  if ("meow" in a) {
    console.log(a.meow);
  }
}

const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === "rejected";
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
// const errors = promises.filter((promise) => promise.status === "rejected");
const errors = promises.filter(isRejected);
// Promise -> Pending -> Settled(Resolved, Rejected)
