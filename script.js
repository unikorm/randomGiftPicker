"use strict";

let check = console.log;

let inputName = document.getElementById("inputName");
let selectedName = document.getElementById("selectedName");

const buttonOnInput = document.getElementById("buttonOnInput");
const listOfName = ["adam", "anna", "jana", "zuzka", "matus", "mama", "tato"];


buttonOnInput.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6);
    check(randomNumber);
});

