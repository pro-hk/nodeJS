function workPromise(sec) {
  return new Promise(function (resolve, reject) {
    // DB에서 data가 바로 날아오지 않는다는 가정
    setTimeout(function () {
      resolve("work Promise function");
    }, sec);
  });
}

async function asyncFunction() {
  const result = await workPromise(3000);
  console.log(result);
  return "async function";
}
asyncFunction().then(function (result) {
  console.log(result);
});
