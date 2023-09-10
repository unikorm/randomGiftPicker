"use strict";

import { listOfNames  } from "./oldway.js";

let checkAgain = console.log;

const bttnRandom = document.getElementById("bttnCreateRandomConnect");
const ulToShowIt = document.getElementById("resultOfRandominator");
const listOfNamesOne = [...listOfNames];  // spread operator
const listOfNamesTwo = Array.from(listOfNames);  // Array.from method
// checkAgain(listOfNamesOne, listOfNamesTwo, bttnRandom, ulToShowIt);


bttnRandom.addEventListener("click", () => {
    checkAgain(listOfNamesOne, listOfNamesTwo);
});
