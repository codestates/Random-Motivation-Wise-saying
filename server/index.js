const express = require("express"); // express 모듈을 가져와서
const app = express(); // 새로운 express앱을 생성
const port = 8080;
const controllers = require("./controllers")
const cookieParser = require("cookie-parser");
const cors = require('cors')

app.use(cors({
        origin: ['http://localhost:3000'],
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS']
      }));
app.use(express.json()); /** 클라이언트 body 해석 위함 */
app.use(cookieParser()); /** 쿠키 기능 활성화 */
app.use(express.urlencoded({ extended: false })); /** 클라이언트 body 해석 위함 */

app.get("/", controllers.main); /** 메인 페이지에서 랜덤 명언 생성*/
app.get("/:userId", controllers.mypage); /** 나의 명언 페이지에서 랜덤 명언 생성*/

app.use(
    cors({
      origin: ['https://localhost:3000'],
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS']
    })
  );

app.get("/myWiseSayings/:userId", controllers.myWiseSayings) /** 유저가 추가한 자기만의 명언리스트 */
app.post("/myWiseSayings/:userId/:wiseSayingId", controllers.addMyWiseSayings) /** 자기만의 명언리스트에 명언 추가 */
app.delete("/myWiseSayings/:userId/:wiseSayingId", controllers.deleteMyWiseSayings) /** 자기만의 명언리스트의 명언 삭제 */
app.patch("/myWiseSayings/:userId/:wiseSayingId", controllers.patchMyWiseSayings) /** 자기만의 명언리스트의 명언 수정 */

app.get("/users/auth", controllers.auth);
app.post("/users/signup", controllers.signup);
app.post("/users/login", controllers.login);
app.post("/users/signout", controllers.signout);
app.post("/users/logout", controllers.logout);
app.post("/users/editprofile", controllers.editprofile);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));