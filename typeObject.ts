export {};
// {} and Object
const x: {} = "hello";
const y: Object = "hi"; // {}, Object는 모든 타입이다. null, undefined 제외

const xx: object = { hello: "world" };
const z: unknown = { hello: "world" };

// unknown = {} | null | undefined
if (z) {
  z; // z : {} 라고 뜸
}
