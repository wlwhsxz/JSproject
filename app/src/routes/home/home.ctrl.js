const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    }
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;
        
        const users = UserStorage.getUsers("id", "pw"); // UserStorage 클래스의 getUsers 메소드를 이용하여 id, pw를 가져오기

        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하였습니다"
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};