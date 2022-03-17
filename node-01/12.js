function work(sec, callback) {
  setTimeout(function () {
    callback(new Date().toISOString());
  }, sec);
}
/*
work(1000, function (result) {
  console.log("첫번째 작업", result);
});
work(1000, function (result) {
  console.log("두번째 작업", result);
});
work(1000, function (result) {
  console.log("세번째 작업", result);
});
*/

// 콜백 지옥  Promise(약속) resolve, reject
work(1000, function (result) {
  console.log("첫번째 작업", result);
  work(1000, function (result) {
    console.log("두번째 작업", result);
    work(1000, function (result) {
      console.log("세번째 작업", result);
    });
  });
});
