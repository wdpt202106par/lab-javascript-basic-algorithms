/*
 * @author lotik
 * ironHack course first lab
 * 02/2021
 */
console.log("I'm ready");

//////// utils variable for all process
const possibleCase = {
  cas1: { hacker1: "Plop", hacker2: "Plop" },
  cas2: { hacker1: "Plop", hacker2: "PlopPLOP" },
  cas2: { hacker1: "PlopPLOP", hacker2: "Plop" },
};
let driver = possibleCase.cas1[0];
let navigator = possibleCase.cas1[1];
const lengthDriver = driver.length;
const lengthNavigator = navigator.length;
function iteration1(driver, navigator) {
  // Iteration 1: Names and Input

  return `The driver's name is ${driver}\nThe navigator's name is ${navigator}`;
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
  const labConsole = ``;
  for (const cas in possibleCase) {
    if (Object.hasOwnProperty.call(possibleCase, cas)) {
      const element = possibleCase[cas];
      labConsole += iteration1(cas.hacker1, cas.hacker2);
      labConsole += iteration2(cas.hacker1, cas.hacker2);
      labConsole += iteration3(cas.hacker1, cas.hacker2);
    }
  }
  return labConsole;
}

console.log(myLab());
