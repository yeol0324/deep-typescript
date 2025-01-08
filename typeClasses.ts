export {};
// class의 새로운 기능들

class A {
  //   a: string;
  //   b: number;
  //   constructor(a: string, B: number = 123) {
  //     this.a = "123";
  //     this.b = 123;
  //   }
  a: string = "123";
  private b: number = 123; // typescript 의 private, 가급적 이렇게 사용 근데 자바스크립트로 변환 시 public으로 바뀌긴 함
  #c: number = 123; // 자바의 private, protected 사용 불가
  method() {}
}

interface AA {
  readonly aa: string;
  bb: string;
}
class BB implements AA {
  aa: string = "123";
  bb: string = "world";
  private cc: string = "wow";
  protected dd: string = "wow";

  method() {
    console.log(this.cc, this.dd);
  }
}
class C extends BB {
  method(): void {
    // console.log(this.cc) private 상속에서도 사용 불가
    console.log(this.dd);
  }
}
new C().aa;
new C().bb;

// abstract 추상도 추가됨
abstract class CC {
  aa: string = "123";
  bb: string = "world";
  private cc: string = "wow";
  protected dd: string = "wow";

  abstract method(): void;
  method2() {
    console.log(this.cc, this.dd);
  }
}
