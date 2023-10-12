"use strict";
const PORT = 80;

const app = require("../app")

app.listen(PORT, () => {
    console.log("서버 가동");
});