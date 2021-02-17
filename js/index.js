/*
 * @author lotik
 * 02/2021
 *
 * ironHack course first lab
 * Each iterations is a function that return a string,
 * then concatenate with another function and console log this last.
 */
"use strict";
console.log("I'm ready");

//////// utils variable for all process
const possibleCase = {
  cas1: { hacker1: "Plop", hacker2: "Plop" },
  cas2: { hacker1: "Plop", hacker2: "PlopPLOP" },
  cas2: { hacker1: "PlopPLOP", hacker2: "Plop" },
};

function iteration1(driver, navigator) {
  // Iteration 1: Names and Input
  return `
    The driver's name is ${driver}
    The navigator's name is ${navigator}
    `;
}

// Iteration 2: Conditionals
////////////////////////////////////////////
// The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
////////////////////////////////////////////////
/**
 *
 *
 * @param {string} driver
 * @param {string} navigator
 * @returns
 */
function iteration2(driver, navigator) {
  // insert length in const to reuse with a readable name
  const lengthDriver = driver.length;
  const lengthNavigator = navigator.length;

  // compute with if to choose the message
  if (lengthDriver === lengthNavigator) {
    return `Wow, you both have equally long names, ${lengthDriver} characters!.`;
  }
  if (lengthDriver < lengthNavigator) {
    return `It seems that the navigator has the longest name, it has ${lengthNavigator} characters.`;
  }
  if (lengthDriver > lengthNavigator) {
    return `The driver has the longest name, it has ${lengthDriver} characters.`;
  }
}

// Iteration 3: Loops
function iteration3(driver, navigator) {
  return `TODO`;
}

//////// final function => return const string that's represent my lab ;o)
function myLab() {
  let labConsole = "";
  for (const cas in possibleCase) {
    if (Object.hasOwnProperty.call(possibleCase, cas)) {
      const element = possibleCase[cas];
      labConsole += iteration1(element.hacker1, element.hacker2);
      labConsole += iteration2(element.hacker1, element.hacker2);
      labConsole += iteration3(element.hacker1, element.hacker2);
      labConsole += "\n\n";
    }
  }
  return labConsole;
}

console.log(myLab());
