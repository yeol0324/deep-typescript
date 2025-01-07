export {};
// function a() {} //void

function a(): void {
  return undefined;
} //void return undefined는 되는데 null  은 불가

interface Human {
  talk: () => void;
}

// 함수에서는 void 를 두가지로 기억
// function | interface method
function aa(callback: () => void): void {
  // return 값이 없다는 뜻
  // return 'hi' 불가능
}
aa(() => 3); // 이건 또 가능..
const human: Human = {
  talk() {
    return "hi"; // 가능
  },
};

// 함수 또는 메서드의 리턴값을 사용하지 않겠다는 뜻의 void

declare function forEach(arr: number[], callback: (el: number) => void): void;

let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
// callback: (el: number) => undefined 였다면 push는 return 값이 number기때문에 실행이 안 됨!
// void !== undefined

interface A {
  talk: () => void;
}
const aaa: A = {
  talk() {
    return 3;
  },
};
const bbb: number = aaa.talk() as unknown as number; // unknown을 포함해야 됨.. bbb는 void가 됨
