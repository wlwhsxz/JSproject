"use strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const client = this.body;
        const { id, pw } = UserStorage.getUserInfo(client.id); // getUsers 를 통하여 저장된 id, pw 값을 id, pw 객체로 할당
        
        if(id){
            if(id === client.id && pw === client.pw){
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client); // 유저 데이터
        return response;
    }
}

module.exports = User;