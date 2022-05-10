console.log(" Strings Demo ");
let fn = "Aravinda"
let ln = "B"
const birtyYear = 1983
let currentYear = 2022

//string concatination
const info = "I'm " + fn + " " + ln + " and i'm " + (currentYear - birtyYear) + " years old"
console.log(info);

//template literal
const info2 = `I'm ${fn} ${ln} and i'm ${currentYear - birtyYear} years old`
console.log(info2);

const emailid = "  aravindahb@gmail.Com   "

console.log(`Index of @ ${emailid.indexOf('@')}`);
console.log(`Last index of @ ${emailid.lastIndexOf('@')}`);

console.log(`Char at ${emailid.charAt(0)}`);
console.log(`Length of the string ${emailid.length}`);
console.log(`Trim and lengeth ${emailid.trim().length}`);
console.log(`To Upper  ${emailid.toUpperCase()}`);
console.log(`To Lower case ${emailid.toLowerCase()}`);

let words = info2.split(" ")
console.log(words);

