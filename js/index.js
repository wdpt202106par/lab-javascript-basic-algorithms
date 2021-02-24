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
let str = "";
for (let i = 0; i < name_hacker1.length ; i++ ){
  str = str + name_hacker1[i].toUpperCase();
  if (i !== name_hacker1.length -1){
    str += " ";
  }
}
console.log(str);

let str2 = "";
for (let i = name_hacker1.length-1; i >= 0 ; i-- ){
  str2 = str2 + name_hacker1[i];
}
console.log(str2);

if (name_hacker1.localeCompare(name_hacker2) === -1){
  console.log(name_hacker1);
}else if (name_hacker1.localeCompare(name_hacker2) === 1){
  console.log(name_hacker2);
}else{
  console.log("What?! You both have the same name?")
}

//Bonus 1
let LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt ultricies ultrices. Fusce accumsan diam sit amet finibus mattis. Phasellus mollis enim sed pellentesque rutrum. Morbi nec nisl ultrices, pretium arcu dapibus, tincidunt est. Aliquam vehicula magna eget massa mollis aliquet. Aliquam mauris lorem, sodales eget pretium non, blandit sit amet enim. Fusce vitae accumsan lorem, ac vulputate est. Mauris lacinia libero vitae ipsum faucibus facilisis. Vivamus vulputate pulvinar enim id sollicitudin. Cras imperdiet erat eget dolor auctor faucibus quis a orci.

Maecenas vel ex bibendum, commodo turpis non, molestie ipsum. Donec turpis mi, convallis sit amet neque ac, lobortis varius massa. Pellentesque sagittis volutpat nunc eget consequat. Aliquam vitae mi erat. Curabitur dictum, urna sed pellentesque sollicitudin, eros massa fringilla turpis, vitae elementum ipsum velit quis massa. Integer sed maximus nisl. Nulla eleifend a libero sed venenatis. Nunc pretium justo in arcu tincidunt, vitae vehicula nisi volutpat. Proin libero justo, aliquam vel mattis congue, vestibulum ut ligula. Praesent pharetra lacus sit amet nisl tincidunt tincidunt. In blandit tristique nibh quis consequat. Ut tempus lobortis mollis.

Phasellus quis enim eu nunc semper mollis. Aenean vitae lacus eu metus pulvinar consectetur vitae sed sapien. Donec convallis ullamcorper ante, quis blandit tellus semper rutrum. Sed luctus egestas eros eget vestibulum. Sed convallis felis id suscipit fermentum. Cras sapien justo, tristique a facilisis ac, tempor vitae purus. Curabitur nisi enim, porta in lorem ac, luctus facilisis mauris. Nulla lectus justo, luctus eu congue sit amet, finibus vitae tortor. Donec vel venenatis libero. Sed pellentesque lectus vitae tellus tincidunt pharetra. Integer nec nulla eget lacus malesuada porta. Quisque ac magna eget lectus mattis volutpat.`;

let compteur_mot = 0;
for (let i = 0 ; i < LoremIpsum.length ; i++){
  if ((LoremIpsum[i]===" ") || (LoremIpsum[i]==="\n")){    
    compteur_mot++;
  }
}
console.log(compteur_mot-1);

let compteur_mot_et = 0;
let position = LoremIpsum.indexOf("et");
while (position != -1){
  compteur_mot_et++;
  position = LoremIpsum.indexOf("et", position + 1);
}
console.log(compteur_mot_et);

//Bonus 2
let PhraseToCheck = "A man, a plan, a canal, Panama!";
//let PhraseToCheck = "Amor, Roma";
//let PhraseToCheck = "race car";
//let PhraseToCheck = "Was it a car or a cat I saw?";
//let PhraseToCheck = "No 'x' in Nixon";

let strSpecChar = ` ,!?'`; // Création string caractères spéciaux pour itération
let IsPalindrome = true;
let PhraseToCheckInitial = PhraseToCheck;

for (let i = 0; i < strSpecChar.length ; i++){
  let position = PhraseToCheck.indexOf(strSpecChar[i]);
  //Suppression caractères spéciaux
  while (position != -1){
    PhraseToCheck = PhraseToCheck.slice(0, position) + PhraseToCheck.slice(position + 1, PhraseToCheck.length);
    position = PhraseToCheck.indexOf(strSpecChar[i]);
  }
}

PhraseToCheck = PhraseToCheck.toLowerCase();

//Comparaison caractères en partant de chaque extrémité
for (let i = 0; i < PhraseToCheck.length / 2 ; i++){
  //console.log(PhraseToCheck, i, PhraseToCheck.length-1-i, PhraseToCheck[i],PhraseToCheck[PhraseToCheck.length-1-i]);

  if (PhraseToCheck[i] === PhraseToCheck[PhraseToCheck.length-1-i]){
    IsPalindrome = IsPalindrome && true
  }else{
    IsPalindrome = IsPalindrome && false
  }
}

if (IsPalindrome){
  console.log(PhraseToCheckInitial, "est un palindrome");
} else {
  console.log(PhraseToCheckInitial, "n'est pas un palindrome");
} 