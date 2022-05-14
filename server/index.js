const express = require("express"); // express 모듈을 가져와서
const app = express(); // 새로운 express앱을 생성
const port = 8080;

app.get("/", (req, res) => res.send("Hi Claire Welcome to Node.js")); // 여기에 나중에 HTML을 넣어주게 된다.

app.listen(port, () => console.log(`Example app listening on port ${port}!`));