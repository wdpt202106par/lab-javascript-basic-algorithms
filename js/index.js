// Iteration 1: Names and Input
let name_hacker1 = "John";
console.log(`the driver's name is ${name_hacker1}`);
let name_hacker2 = "Bob";
console.log(`the navigator's name is ${name_hacker2}`);


// Iteration 2: Conditionals
if (name_hacker1.length > name_hacker2.length){
    console.log("the driver has the longest name, it has", name_hacker1.length)
  } else if (name_hacker1.length < name_hacker2.length){
    console.log("the navigatos has the longest name, it has", name_hacker2.length)
  } else if (name_hacker1.length === name_hacker2.length){
    console.log("Wow, you both have equally long names,"+name_hacker1.length +" characters!");
  }

// Iteration 3: Loops