"use strict";

let check = console.log;

let inputName;
let selectedName = document.getElementById("selectedName");

const buttonOnInput = document.getElementById("buttonOnInput");
const listOfName = ["adam", "anna", "jana", "zuzka", "matus", "mama", "tato"];

const getRandomName = () => {
    inputName = document.querySelector("#inputName").value;
    let randomNumber = Math.floor(Math.random() * 7);
    let nameBaseOnIndex = listOfName[randomNumber];
    nameBaseOnIndex === inputName ? getRandomName() : nameBaseOnIndex;
};

buttonOnInput.addEventListener("click", () => {
    getRandomName();
});

