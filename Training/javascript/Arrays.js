let marks = [55,45,65,38,66,88]

console.log(marks);

let fruits  = ['Apple', 'Mango', 'Pine-Apple' , 'Banana']

console.log(fruits);

// push - insert the element at the end
fruits.push('Orange')
console.log(`After push operation ${fruits}`);
console.log(`Total Elements in an Array after push : ${fruits.length}`);

//pop - remove the last element from the array

fruits.pop()
console.log(`After pop operation ${fruits}`);
console.log(`Total Elements in an Array after pop : ${fruits.length}`);


// unshift - which will insert the element in the begining
fruits.unshift('Lemon')
console.log(`After unshift operation ${fruits}`);
console.log(`Total Elements in an Array after unshift : ${fruits.length}`);

// shift - which will remove the element which is in the begining
fruits.shift()
console.log(`After shift operation ${fruits}`);
console.log(`Total Elements in an Array after shift : ${fruits.length}`);

// delete - to remove the element and retain the index
delete fruits[1]
console.log(`After delete operation ${fruits}`);
console.log(`Total Elements in an Array after delete : ${fruits.length}`);

fruits[1] = 'New Mango'
console.log(`After insert operation ${fruits}`);
console.log(`Total Elements in an Array after insert : ${fruits.length}`);

// remove teh element
// splice will alter the origenal array
fruits.splice(0,2)
console.log(`After insert operation ${fruits}`);
console.log(`Total Elements in an Array after insert : ${fruits.length}`);

// slice will not alter the original array
let newArray = fruits.slice(0,1);
console.log(newArray);
console.log(fruits);

let evennum = [2,4,8]
let oddnum = [1,3,5]

let numbers = oddnum.concat(evennum)
console.log(`Numbers : ${numbers}`);

console.log(fruits.join(" , "));


//2-D
let board = [
    [1,2,3],
    [2,3,4,5],
    [3,4,5,6,7]
]
console.log(board);
console.log(board[0][0]);