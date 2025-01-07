export {};
// type alias , extends

type Animal = { breath: true };
type Mammalia = Animal & { breed: true };
type Human = Mammalia & { think: true };

const yurim: Human = { think: true, breed: true, breath: true };

interface A {
  breath: true;
}
interface B extends A {
  breed: true;
}
const b: B = {
  breath: true,
  breed: true,
  talk: () => {},
  eat: () => {},
};

//interface는 중복으로 선언이 됨

interface A {
  talk: () => void;
}
interface A {
  eat: () => void;
}

// 예전엔 앞에 I,T,E 붙이는 게 국룰이었다함... 그래서 I로 시작하는 타입이 많았구나
interface IProps {}
type Ttype = {};
enum Etype {}
