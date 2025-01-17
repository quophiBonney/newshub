const express = require("express");
const { signup, login } = require("../controllers/user.controller");

const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);

module.exports = router;
