const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    }
};
    
const users = {
    id: ["minu", "mino", "이민우"],
    pw: ["123", "1234", "12345"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if(users.id.includes(id)){
            users.id.indexOf(id);
            if(users.pw(idx) === pw){
                return res.json({
                    success: true,
                })
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};