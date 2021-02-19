// Iteration 1: Names and Input
let hacker1 = "Tran";
console.log (`The driver's name is ${hacker1}`);
let hacker2 = "Alexandre";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length)
{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} 
else { console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}
// Iteration 3: Loops
// print "T R A N"
let result1 = "";
  for (let i = 0; i < hacker1.length;i++)
{  
  result1 = result1 + " " + hacker1[i].toUpperCase();
}
console.log(result1);
// Print "erdnaxelA" but it has shown "undefinederdnaxelA"
let result2 = "";
 for (let e = hacker2.length; e >= 0; e--)
 {
     result2 += hacker2[e];
 }
 console.log(result2);
//lexicographic order 
if (hacker1.localeCompare(hacker2)<0){
    console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2)>0){
    console.log(`Yo, the navigator goes first definitely.`)}
    else{console.log(`What?! You both have the same name?`)}
//Bonus 1: 
// Generate 3 paragraphs. Store the text in a variable type of string.
let content = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
//Make your program count the number of words in the string.
console.log(content.length);
//Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.
let count= 0
for (let n = 0; n < content.length; n++ )
{
    if (content[n]===' ' && content[n+1]==='e' && content[n+2]==='t' && content[n+3]===' ')
    {count++;}
    else{count=count + 0}
}
console.log(count);
//Bonus 2:
//Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome]
let phraseToCheck = True;
let len = content.length;
for (let p = 0; p < len/2; p++ ){
   if (content[p] !== content[len- 1 - p]){
     return False;
} else {return true}
console.log(phraseToCheck);