const name = document.querySelector("#name"),
    id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    confirmPw = document.querySelector("#confirm-pw");
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("아이디를 입력해주세요.");
    if(pw.value !== confirmPw.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        name: name.value,
        id: id.value,
        pw: pw.value,
    };
    console.log(req);

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req) // 버튼 클릭시 바디에 데이터 저장
    })
    .then((res) => res.json()) // 서버로부터 응답시 json메소드 호출, 서버의 응답 완료시 promise 객체 반환
    .then((res) => { // promise 객체로 접근
        if(res.success){
           return location.href="/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
};
