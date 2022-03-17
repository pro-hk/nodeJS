function workPromise(param) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param) {
        resolve("해결완료");
      } else {
        reject("실패");
      }
    }, 3000);
  });
}
// pending ==> fullfield   /   rejected
// method chainig
// Promise를 보완 => async / await
workPromise(false)
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (error) {
    console.log(error);
    s;
  });

// ajax 통신
// db에서 user 정보 받기.id얻기.출력하기
