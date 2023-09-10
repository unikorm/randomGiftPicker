"use strict";

let check = console.log;

let inputName = document.querySelector("#inputName");
check(inputName);
let selectedName = document.getElementById("selectedName");

const buttonOnInput = document.getElementById("buttonOnInput");
const listOfNames = ["adam", "anna", "jana", "zuzka", "matus", "mama", "tato"];

const getRandomName = () => {
    let inputNameValue = document.querySelector("#inputName").value;
    check(inputNameValue);
    let nameBaseOnIndex;
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * 7);
        nameBaseOnIndex = listOfNames[randomNumber];
    } while (nameBaseOnIndex === undefined || nameBaseOnIndex === inputName);
    check(nameBaseOnIndex);
    check(inputNameValue.length);

    const reduceArray = () => {
        listOfNames.splice(randomNumber, 1);
    };

    reduceArray();
    check(listOfNames);
    return nameBaseOnIndex;
};

const showRandomName = () => {
    selectedName.textContent = "";
    let name = document.createTextNode(getRandomName());
    selectedName.appendChild(name);
};

buttonOnInput.addEventListener("click", () => {
    let inputNameValue = document.querySelector("#inputName").value;
    check(inputNameValue.length);
    if (inputNameValue.length === 0) {
        check("notin");
    } else {
        check(listOfNames);
        showRandomName();
    }
    // if (inputName.value.length === 0) {
    //     console.log("ajaj");
    // } else {
    //     showRandomName();
    // };
});

