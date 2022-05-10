let x = 2, y = 2, z = 10 , p = '2'


console.log("Equal or Not : " + (x == y ));
console.log("Equal or Not : " + (x == p ));
console.log("Equal with Type : " + (x === y ));
console.log("Equal with Type : " + (x === p ));


console.log("Equal or Not : " + (x != y ));
console.log("Equal or Not : " + (x != p ));
console.log("Equal with Type : " + (x !== y ));
console.log("Equal with Type : " + (x !== p ));

console.log(`${x} is Greater than  ${z}:`  + (x > z));
console.log(`${x} is Less than  ${z}: ` + (x < z));

console.log("Ternary : " + ((x > z)? " x is greater " : "Z is greater "))

console.log(!(x==2));