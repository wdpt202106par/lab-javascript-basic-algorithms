// Iteration 1: Names and Input
let hacker1 = 'adam';
let hacker2 = 'Alexandre';
let hacker3 = 'Ting-Chi';
console.log(`The driver's name is ${hacker1}.`);
console.log(`The first navigator's name ${hacker2}.`);
console.log(`The second navigator's name is ${hacker3}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name. It has ${hacker1.length} character.`)
} else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names: ${hacker2.length} characters.`)
} else {
    console.log(`The navigator has the longest name. It has ${hacker2.length} characters.`)
}


// Iteration 3: Loops
let result = ""
for (let i = 0; i <= hacker1.length -1; i++) {
    result += hacker1[i]
    if (i!==hacker1.length-1) {
        result += " "
    }
}
console.log (result.toUpperCase());

