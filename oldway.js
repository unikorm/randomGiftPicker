"use strict";

let check = console.log;

let inputName = document.querySelector("#inputName");
// check(inputName);
let selectedName = document.getElementById("selectedName");
const buttonOnInput = document.getElementById("buttonOnInput");
export const listOfNames = ["adam", "anna", "jana", "zuzka", "matus", "mama", "tato"];

const getRandomName = () => {
    let inputNameValue = document.querySelector("#inputName").value;
    // check(inputNameValue);
    let nameBaseOnIndex;
    let randomNumber;

    if (listOfNames.length === 0) {
        check("The List is empty by now, get the fuck out of here brother...");
    } else {
        do {
            randomNumber = Math.floor(Math.random() * 7);
            nameBaseOnIndex = listOfNames[randomNumber];
            } while (nameBaseOnIndex === undefined || nameBaseOnIndex === inputNameValue);
    }; 
    // check(nameBaseOnIndex);
    // check(inputNameValue);

    const reduceArray = () => {
        listOfNames.splice(randomNumber, 1);
    };

    reduceArray();
    // check(listOfNames);
    return nameBaseOnIndex;
};

const showRandomName = () => {
    selectedName.textContent = "";
    let name = document.createTextNode(getRandomName());
    selectedName.appendChild(name);
};

buttonOnInput.addEventListener("click", () => {
    let inputNameValue = document.querySelector("#inputName").value;
    // check(inputNameValue.length);
    if (inputNameValue.length === 0) {
        check("notin's here");
    } else {
        // check(listOfNames);
        showRandomName();
    };
});

