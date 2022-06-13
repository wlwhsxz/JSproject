// MVC 디자인 분류 중 M(Models)
// 유저 정보 관련

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
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
    return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.name.push(userInfo.name);
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        return {success: true};
    }
}

module.exports = UserStorage;