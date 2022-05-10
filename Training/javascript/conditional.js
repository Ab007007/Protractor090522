let uname = 'Aravind'
let age = 0
if (age >=18 ) {
    console.log(`i'm, ${uname} Eligible for Driving licence`);
}
else {
    console.log(`Hey ${uname}, your age should be more than 18 to get licence... 
    you should wait for antother ${18-age} years`);
}

let num1 = 10, num2 = 20, num3 = 15

if(num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater compared to ${num2} and ${num3}`);
}
else if(num2 > num1 && num2 > num3 ) {
    console.log(`${num2} is greater compared to ${num1} and ${num3}`);
}
else {
    console.log(`${num3} is greater compared to ${num1} and ${num2}`);
}