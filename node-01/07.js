// 구조 분해 할당
let [a, b] = [10, 20];
console.log(a);
console.log(b);

const animal = ["dog", "cat"];
let [first, second] = animal;
console.log(first);
console.log(second);

const obj = {
  name: "장혁",
  age: 20,
  msg: "hello",
};

// const name = obj.name;
// const age = obj.age;
// const msg = obj.msg;
// console.log(name);
// console.log(age);
// console.log(msg);
console.log("=========================");
const { name, age, msg } = obj;
console.log(name);
console.log(age);
console.log(msg);

console.log("=========================");
let [name01, name02, ...rest] = ["최문성", "이창복", "장재율", "이성규", "장성호"];
console.log(name01);
console.log(name02);
console.log(rest[0]);
