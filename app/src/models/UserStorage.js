"use strict";

class UserStorage {
    static #users = { // 클래스를 외부에서 사용하게끔 만들기 위해 static 선언 + #으로 변수 은닉화
        id: ["minu", "mino", "이민우"],
        pw: ["123", "1234", "12345"],
        name: ["이민우", "홍길동", "김삼식"],
    };

    static getUsers(...fields) { // 파라미터들로 넘긴 변수들이 배열 형태로 출력
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers
    }
}

module.exports = UserStorage;