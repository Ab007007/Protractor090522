let num = 19;

for (let index = 1; index <= 10 ; index++) {
    console.log(`${num} * ${index} = ${num * index}`);
    
}

let fruits  = ['Apple', 'Mango', 'Pine-Apple' , 'Banana']
console.log("------------------------ELEMENT  WITH FOR IN--------------------------------");
for( i in fruits)
{
    console.log(`Array with index ${i} has ${fruits[i]}`);
}

console.log("------------------------ELEMENT  WITH FOR OF--------------------------------");
for(fruit of fruits) {
    console.log(`Array has ${fruit}`);
}

console.log("------------------------ELEMENT  WITH FOR EACH--------------------------------");
fruits.forEach(function(ele) {
   console.log(ele); 
})

fruits.forEach(fruit =>{
    console.log(fruit);
})