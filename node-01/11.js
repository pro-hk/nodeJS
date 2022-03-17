function fakeTimeOut(callback) {
  callback();
}
console.log("0");
const second = function () {
  console.log("1");
};
fakeTimeOut(second);
console.log("2");
