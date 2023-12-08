"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/conference", ctrl.conference);

module.exports = router;