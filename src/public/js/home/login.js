"use strict"

// const { login } = require("../../../routes/home/home.ctrl");

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}

loginBtn.addEventListener("click", login);