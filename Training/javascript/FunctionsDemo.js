
// writing function with function definition
function add(a = 1,b = 1)
{
    console.log(`Sum of two numbers is ${a+b}`);
}
add()
add(10)
add(2,4)

// writing fucntion with function expression / Anonymous Function
let sumofnum = function(x,y) {
    console.log(`Sum of two numbers is ${x+y}`);
}
sumofnum(200,300)

// Arrow function
let sumArrow = (x,y) => {
    console.log(`Sum of two numbers is ${x+y}`);
}
sumArrow(1000,2000)