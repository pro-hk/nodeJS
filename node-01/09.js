//this
const people = {
  name: "홍길동",
  say: function () {
    console.log(this);
  },
};
people.say();
let sayPeople = people.say;
// node의 최상위 객체 : global
// 자바스크립트의 this는 누가 호출하느냐에 따라 달라진다
sayPeople();
