const dog = "cute";
// dog = "cute";
console.log(dog);
// var는 왠만하면 쓰지 말자.. scope가 다른 언어들과 다르다
// let, const 는 중복선언 안됨, const는 재할당 안됨 / 배열과 객체는 상관없음
const fruits = []; // 메모리상 배열 주소만 찾음.. 추가는 상관 없음
fruits[0] = "apple";
fruits[1] = "orange";
fruits[2] = "banana";
console.log(fruits);
