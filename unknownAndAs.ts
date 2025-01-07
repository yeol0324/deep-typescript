export {};
// unknown and as
// any 는 타입 검사 안 하겠다는 포기 선언과 같음!!
// unknown 은 지금 당장 모르겠엉!!
interface A {
  talk: () => void;
}
const a: A = {
  talk() {
    return 3;
  },
};
const b: unknown = a.talk();
(b as A).talk();

try {
} catch (error) {
  //여기서 error type 이 unknown
  (error as Error).message;
}
