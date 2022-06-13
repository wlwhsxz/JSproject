// MVC 디자인 분류 중 C(Controller)
// 제어 관련

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body); // 클라이언트가 전달한 데이터를 넣어 user 클래스를 인스턴스화
        const response = user.login(); // body 데이터를 갖고서 login() 메서드 실행
        
        return res.json(response);        
    },
};

module.exports = {
    output,
    process,
};
