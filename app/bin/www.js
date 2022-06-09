const app = require("../app"); // 상위 폴더로 가서 app을 불러오기

const PORT = 8080; //포트번호

app.listen(PORT, () => {
    console.log("서버 실행");
});