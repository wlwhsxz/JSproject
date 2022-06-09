const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login); // 클라이언트의 요청의 기능을 수행 (연결)
router.post("/login", ctrl.process.login);

module.exports = router;