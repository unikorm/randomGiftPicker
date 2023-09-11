"use strict";

import { listOfNames  } from "./oldway.js";

let checkAgain = console.log;

const bttnRandom = document.getElementById("bttnCreateRandomConnect");
const ulToShowIt = document.getElementById("resultOfRandominator");
const listOfNamesOne = [...listOfNames];  // spread operator
const listOfNamesTwo = Array.from(listOfNames);  // Array.from method
// checkAgain(listOfNamesOne, listOfNamesTwo);

const randomizeArray = (array) => {    // randomize array's order (long version)
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temporary = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temporary;
    };
    return newArray;
};
const randomArrayOne = randomizeArray(listOfNamesOne);   // results of this function
const randomArrayTwo = randomizeArray(listOfNamesTwo);
// checkAgain(randomArrayOne, randomArrayTwo);

const makeConnections = () => {
    const connections =[];

    let randomizeSecond = listOfNamesTwo.sort(() => Math.random() - .5);  // randomize array's order (short version) and all in one line (function + result)
    checkAgain(randomizeSecond);

    for (let i = 0; i < listOfNamesOne.length; i++) {
        const value1 = listOfNamesOne[i];
        const value2 = randomizeSecond[i];

        connections.push({index: i, value: value1 + " má " + value2});   
    };

    return connections;
};


bttnRandom.addEventListener("click", () => {
    // checkAgain(randomizeFirst, randomizeSecond);    // function to connect two rondomized arrays with each other, but problem is that it is without validation
    // const orderArr = [0, 1, 2, 3, 4, 5, 6]
    // const connectedArrays = orderArr.map((index) => {
    //     return randomizeFirst[index] + " má " + randomizeSecond[index];
    // });
    // checkAgain(connectedArrays);
    const connections = makeConnections();
    checkAgain(connections);
});
