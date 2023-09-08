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
    // nameBaseOnIndex === undefined ? getRandomName : nameBaseOnIndex;
    // nameBaseOnIndex === inputName ? getRandomName() : nameBaseOnIndex;
    if ()
    
    check(nameBaseOnIndex);
    check(nameBaseOnIndex.length);
    check(typeof(nameBaseOnIndex));
    check(inputName);
    check(inputName.length);
    check(typeof(inputName));

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
    check(listOfName);
});

