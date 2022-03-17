// node js module()  가져와서 쓴다
// node js는 서버프로그래밍 언어가 아님. 브라우저에서 떼어낸 해석기
// express : 모듈
const http = require("http");
http
  .createServer(function (req, res) {
    console.log(req.url); // 사용자가 요청하는 주소
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.write("<h1>NODE JS로 만들어본 서버 만들기 01</h1>");
      res.write(
        `<ul>
          <li><a href="/main">main</li>
          <li><a href="/board">board</li>
          <li><a href="/user">user</li>
        </ul>`
      );
      res.end("<p>http 모듈을 사용했습니다.</p>");
    } else if (req.url === "/board") {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.write("<h1>Board</h1>");
      res.write(
        `<ul>
          <li><a href="/main">main</li>
          <li><a href="/board">board</li>
          <li><a href="/user">user</li>
        </ul>`
      );
      res.end();
    } else if (req.url === "/main") {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.write("<h1>Board</h1>");
      res.write(
        `<ul>
          <li><a href="/main">main</li>
          <li><a href="/board">board</li>
          <li><a href="/user">user</li>
        </ul>`
      );
      res.end();
    } else if (req.url === "/user") {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.write("<h1>Board</h1>");
      res.write(
        `<ul>
          <li><a href="/main">main</li>
          <li><a href="/board">board</li>
          <li><a href="/user">user</li>
        </ul>`
      );
      res.end();
    }
  })
  .listen(3000, function () {
    console.log("3000번 포트에서 서버 연결중");
  });
