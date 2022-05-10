const Student = require('./ClassDemo.js');
const Person = function (fn,ln,birthyear) {
    this.fn = fn;
    this.ln = ln;
    this.birthyear = birthyear
    
    this.calAge = function() {
        console.log(`Age of a person ${2022-this.birthyear}`);
    }
}

const ahb = new Person("AAAA" , "BBBB" , 1980)
console.log(ahb.fn);
ahb.calAge()
const student = new Student("XXXXX" , "CCCCC")
console.log(`Student name ${student.name}`);