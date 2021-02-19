// Iteration 1: Names and Input
let hacker1 = 'adam';
let hacker2 = 'Alexandre';
let hacker3 = 'Ting-Chi';
console.log(`The driver's name is ${hacker1}.`);
console.log(`The first navigator's name ${hacker2}.`);
console.log(`The second navigator's name is ${hacker3}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} character.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names: ${hacker2.length} characters.`)
} else {
    console.log(`The navigator has the longest name. It has ${hacker2.length} characters.`)
}
/*console.log (hacker1.length);
console.log (hacker2.length);
console.log (hacker3.length);
*/

// Iteration 3: Loops
//for (let i = 0; i <= hacker1.length -1; i++) {
//  console.log(hacker1.toUpperCase(0,5));
//}
let result = ""
for (let i = 0; i <= hacker1.length - 1; i++) {
    result += hacker1[i]
    if (i !== hacker1.length - 1) {
        result += " "
    }
}
console.log(result.toUpperCase());

let resultBackwards = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    resultBackwards += hacker2[i]

}
console.log(resultBackwards)



for (let i = 0; i <= hacker2.length - 1; i++)

{
    if (hacker1[i].localeCompare(hacker2[i]) === 0) {

        console.log("What?! You both have the same name?");
        break;

    } else if (hacker1[i].localeCompare(hacker2[i]) === -2 || -1)

    {
        console.log("The driver's name goes first.");
        break;
    } else {
        console.log("Yo, the navigator goes first definitely.");
        continue;
    }

}


// Lorem, probleme pour identifier 'et' et compter

let loremVar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mauris arcu, euismod et vulputate quis, ornare a velit. Nulla auctor mauris quis orci vestibulum, id fermentum est tempus. Sed a ante quis purus ultrices consequat. Sed tellus arcu, suscipit at lectus vel, pharetra bibendum metus. Fusce ac velit erat. Curabitur commodo quam vel urna elementum, eget convallis arcu dictum. Aliquam molestie et leo eget condimentum. Fusce id imperdiet augue, et dapibus felis. Aenean bibendum libero id urna consectetur faucibus. Maecenas non erat at mi feugiat pulvinar in sit amet ante. Mauris ut lorem magna. Nunc vitae posuere quam. Quisque ex est, posuere et tincidunt id, lacinia id ex. Cras ullamcorper tellus tortor, at tristique ante posuere ut. Maecenas a vulputate dolor. Vestibulum vitae hendrerit mauris, id dictum ante.

Cras sed lobortis libero. Maecenas tincidunt a neque id finibus. Cras eleifend posuere tristique. Maecenas pharetra odio nec neque congue mattis. Phasellus lobortis condimentum dui, a semper magna ultricies id. Cras vehicula luctus magna eget porttitor. Curabitur sit amet dignissim mauris. Aliquam in dignissim dolor.

Aliquam luctus euismod neque non malesuada. Morbi et erat tincidunt tortor porttitor suscipit. Integer sagittis eleifend neque. Proin auctor ornare leo, at mattis sem suscipit porttitor. Proin ac facilisis nisl. Sed vel dui rhoncus, lobortis massa a, hendrerit tellus. Ut quis metus nec orci ornare blandit. Ut vestibulum blandit augue nec fringilla. Vestibulum consequat aliquam turpis fringilla imperdiet. Vivamus a tellus ut mi bibendum interdum. Sed at turpis tincidunt, convallis diam et, molestie diam. Proin maximus congue placerat. Vivamus sed tortor vitae sapien rutrum consequat. Sed dignissim cursus enim, eu euismod velit elementum nec.`

let nbrWords = 0;
let nbrEt = 0;
let searchEt = ` ` + `et` + ` ` || ` ` + `et`;

for (i = 0; i <= loremVar.length; i++)

{
    if (loremVar[i] === " ") {
        nbrWords = nbrWords += 1;

    } else if (loremVar[i] === searchEt) {

        nbrEt = nbrEt += 1;
    }

}


console.log(nbrWords);
console.log(nbrEt);

// Bonus 2 - Non terminé 

let phraseToCheck = "amor, Roma"

for (i = 0; i <= phraseToCheck.length; i++) {
    if (phraseToCheck.charAt(phraseToCheck.length - 1) === phraseToCheck.charAt(0)) {


    }

}