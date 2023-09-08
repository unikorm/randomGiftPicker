"use strict";

let check = console.log;

let inputName;
let selectedName = document.getElementById("selectedName");

const buttonOnInput = document.getElementById("buttonOnInput");
const listOfName = ["adam", "anna", "jana", "zuzka", "matus", "mama", "tato"];

const getRandomName = () => {
    let inputName = document.querySelector("#inputName").value;
    let nameBaseOnIndex;
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * 7);
        nameBaseOnIndex = listOfName[randomNumber];
    } while (nameBaseOnIndex === undefined || nameBaseOnIndex === inputName);
    // check(nameBaseOnIndex);
    // check(inputName);

    const reduceArray = () => {
        listOfName.splice(randomNumber, 1);
    };

    reduceArray();
    return nameBaseOnIndex;
};

const showRandomName = () => {
    selectedName.textContent = "";
    let name = document.createTextNode(getRandomName());
    selectedName.appendChild(name);
};

buttonOnInput.addEventListener("click", () => {
    showRandomName();
    // check(listOfName);
});

