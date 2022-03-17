// node js 비동기 처리
// 빨래 돌리고 청소하고 강아지 목욕 (동기: 끝나면 시작 / 비동기 : 하면서..)
// call back
// setTimeout(() => {
//   console.log("todo : first working");
// }, 3000);
// setTimeout(() => {
//   console.log("todo : second working");
// }, 2000);

// callback은 함수의 매개변수로 주로 쓰임
const second = function () {
  console.log("todo : second working");
};
const first = function () {
  setTimeout(second, 2000);
  console.log("todo : first working");
};

setTimeout(first, 3000);

// for (let i = 0; i < 10000; i++) {
//   console.log("todo : " + i + " working");
// }
