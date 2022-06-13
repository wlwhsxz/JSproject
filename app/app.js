// 해당 메인 파일에 Node.js 서버의 기본 설정을 저장

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); // 첫 경로를 ./views로 설정
app.set("view engine", "ejs"); // 생성될 html 코드들을 어떤 엔진으로 해석할지 설정 -> ejs로 해석
app.use(express.static(`${__dirname}/src/public`)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;

