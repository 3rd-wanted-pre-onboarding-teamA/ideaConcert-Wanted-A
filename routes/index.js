const express = require("express");
const helloRouter = require("./hello.router");

const router = express.Router();

router.use("/", helloRouter);

module.exports = router;