const express = require("express"); // express 모듈을 가져와서
const app = express(); // 새로운 express앱을 생성
const port = 8080;
const controllers = require("./controllers")
const cors = require('cors')

app.use(cors());
app.use(express.json()); /** 클라이언트 body 해석 위함 */
app.use(express.urlencoded({ extended: false })); /** 클라이언트 body 해석 위함 */

app.get("/", (req, res) => res.json("Hi Claire Welcome to Node.js")); // 여기에 나중에 HTML을 넣어주게 된다.
// app.get("/:userId", controllers.userinfo);

app.post("/users/signup", controllers.signup);
app.post("/users/login", controllers.login);
app.post("/users/signout", controllers.signout);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));