"use strict";

const hello = (req, res) => {
    res.render("home/index");
};
const conference = (req, res) => {
    res.render("home/conference");
};

module.exports = {hello,conference}