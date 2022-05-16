const express = require("express"); // express 모듈을 가져와서
const app = express(); // 새로운 express앱을 생성
const port = 8080;
const controllers = require("./controllers")

app.get("/", (req, res) => res.json("Hi Claire Welcome to Node.js")); // 여기에 나중에 HTML을 넣어주게 된다.
app.post("/signup", controllers.signup);
app.post("/login", controllers.login);
app.post("/signout", controllers.signout);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));