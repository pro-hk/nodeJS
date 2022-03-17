function add(num01, num02 = 100) {
  return num01 + num02;
}

const add02 = (num01, num02) => {
  return num01 + num02;
};

console.log(add(100));
console.log(add02(100, 20));
console.log("===============================");

// 두개의 수를 입력 받아서 작은 수 출력해주는 함수 min을 만드시오
function min(a, b) {
  return Math.min(a, b);
}

const min02 = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

const min03 = (a, b) => (a < b ? a : b);

console.log(min(10, 5));
console.log(min02(10, 5));
console.log(min03(10, 5));
console.log("===============================");

// 어떤 수의 2배
function double(num) {
  return num * 2;
}

arrowDouble = (num) => num * 2;

console.log(double(3));
console.log(arrowDouble(3));
